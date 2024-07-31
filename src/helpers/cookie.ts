export const getCookie = (name: string) => {
  if (typeof window === "undefined") return "";
  let cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();

    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }

  return "";
};

export const Cookie = { getCookie };
