import { supabase } from "supabase/supabase-client";

export const checkIsOnboarded = async () => {
try {
  const {data: {user}, error: userError} = await supabase.auth.getUser();

  if (userError || !user) {
    return {
      error: true,
      success: false,
      message: "No User Session was found. Please login to continue.",
      status: 302,
    };
  }
  const {data: student, error: studentError} = await supabase
    .from("student")
    .select("is_onboarded")
    .eq("id", user.id)
    .maybeSingle();

  if (studentError && studentError.code !== "PGRST116") {
    return {
      error: true,
      success: false,
      message: studentError.message,
      status: 500,
    };
  }

  if (student?.is_onboarded) {
    return {
      success: true,
      error: false,
      message: "User is onboarded.",
      status: 200,
      isOnboarded: true,
    };
  }else {
    return {
    success: true,
    error: false, 
    isOnboarded: false,
    message: "User is not onboarded.",
    status: 200,
  }

  }
} catch (error) {
  return {
    error: true,
    message: "An unexpected error occurred. Please try again later.",
  }
}
}
