import { Stack } from "expo-router";
import "../global.css";
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import * as Sentry from "@sentry/react-native";

// Read Sentry configuration from environment variables. Only initialize Sentry
// when a DSN is provided so that the SDK is disabled by default in local/dev
// environments unless explicitly configured.
const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || (global as any)?.EXPO_SENTRY_DSN;
const SENTRY_SEND_PII = (process.env.SENTRY_SEND_PII === "true") || (process.env.NEXT_PUBLIC_SENTRY_SEND_PII === "true");

if (SENTRY_DSN) {
  Sentry.init({
    dsn: SENTRY_DSN,

    // Adds more context data to events (IP address, cookies, user, etc.)
    // For privacy, default to false and allow enabling via an explicit env var.
    sendDefaultPii: SENTRY_SEND_PII || false,

    // Enable Logs
    enableLogs: true,

    // Configure Session Replay
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1,
    integrations: [Sentry.mobileReplayIntegration(), Sentry.feedbackIntegration()],

    // uncomment the line below to enable Spotlight (https://spotlightjs.com)
    // spotlight: __DEV__,
  });
} else {
  // When no DSN is present, do not initialize Sentry. This avoids accidentally
  // sending data from development environments. Keep a lightweight noop to
  // avoid errors if code calls Sentry methods before initialization.
  // Note: `@sentry/react-native` exports safe no-op methods when not init'd,
  // but we still log for developer visibility.
  console.warn("Sentry DSN not provided — Sentry is disabled. Set SENTRY_DSN to enable reporting.");
}

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: any, query) => {
      Sentry.captureException(error, {
        tags: {
          type: "react-query-error",
          queryKey: query.queryKey[0]?.toString() || "unknown",
        },
        extra: {
          errorMessage: error.message,
          statusCode: error.response?.status,
          queryKey: query.queryKey,
        },
      });
    },
  }),
  mutationCache: new MutationCache({
    onError: (error: any) => {
      // global error handler for all mutations
      Sentry.captureException(error, {
        tags: { type: "react-query-mutation-error" },
        extra: {
          errorMessage: error.message,
          statusCode: error.response?.status,
        },
      });
    },
  }),
});

export default Sentry.wrap(function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }} />
      </QueryClientProvider>
    </ClerkProvider>
  );
});