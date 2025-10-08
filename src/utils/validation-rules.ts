export const r_required = (v: unknown) =>
  typeof v === "string" && v.trim() !== ""
    ? true
    : Array.isArray(v) && v.length > 0
    ? true
    : typeof v === "boolean"
    ? true
    : typeof v === "number"
    ? true
    : "This field is required";

export const r_email = (v: unknown) =>
  typeof v === "string" && /.+@.+\..+/.test(v) ? true : "Invalid email address";

export const r_username = (v: unknown) =>
  typeof v === "string" && /^[a-zA-Z0-9]+$/.test(v)
    ? true
    : "Username must be letter or number";

export const r_minLength = (min: number) => (v: unknown) =>
  typeof v === "string" && (v?.length ?? 0) >= min
    ? true
    : `Min characters are ${min}`;

export const r_maxLength = (max: number) => (v: unknown) =>
  typeof v === "string" && (v?.length ?? 0) <= max
    ? true
    : `Max characters are ${max}`;

export const r_strongPassword = (v: unknown) =>
  typeof v === "string" &&
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/.test(
    v
  )
    ? true
    : "Password must have 8-20 characters and at least includes 1 lowercase, 1 uppercase, 1 number and 1 special character";

export const r_matchingPassword =
  (target: string, message = "Password does not match") =>
  (v: unknown) =>
    typeof v === "string" && v === target ? true : message;

export const r_phoneNumber = (v: unknown) =>
  typeof v === "string" &&
  /^(\+62|0)8[1-9][0-9]{8,12}$/.test(v) &&
  v.length >= 10 &&
  v.length <= 15
    ? true
    : "Invalid phone number (must be 10-15 digits)";

export const r_noSpecialChar = (v: unknown) =>
  typeof v === "string" && /^[a-zA-Z0-9\s]*$/.test(v)
    ? true
    : "No specials characters allowed";

export const r_numberOnly = (v: unknown) =>
  typeof v === "string" && /^\d+$/.test(v) ? true : "Only numbers are allowed";

export const composeRules =
  (rules: Array<(v: unknown) => true | string>) => (v: unknown) => {
    for (const rule of rules) {
      const res = rule(v);
      if (res !== true) return res; // berhenti di error pertama
    }
    return true;
  };
