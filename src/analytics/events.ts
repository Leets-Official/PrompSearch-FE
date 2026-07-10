export type AnalyticsAppEnv = "local" | "dev" | "prod";

export type UserStatus = "anonymous" | "authenticated";

export type AnalyticsEventPropertiesMap = {
  card_impression: {
    card_id: string;
    position: number;
    user_status: UserStatus;
    source?: string;
  };
  card_click: {
    card_id: string;
    position: number;
    user_status: UserStatus;
    source?: string;
  };
  prompt_copy_click: {
    prompt_id: string;
    user_status: UserStatus;
    card_id?: string;
    source?: string;
  };
  signup_complete: {
    user_id: string;
    method?: "email" | "google" | "github" | "kakao";
  };
};

export type AnalyticsEventName = keyof AnalyticsEventPropertiesMap;

export type AnalyticsPayload<TName extends AnalyticsEventName = AnalyticsEventName> = {
  name: TName;
  properties: AnalyticsEventPropertiesMap[TName];
  context: {
    anonymous_id: string | null;
    app_env: AnalyticsAppEnv;
    page_url: string | null;
    referrer: string | null;
    session_id: string | null;
    timestamp: string;
  };
};
