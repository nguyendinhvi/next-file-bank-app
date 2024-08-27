export const pathOf = {
  profile: (id: string = "id") => `profile/[${id}]`,
  folderDetail: (id: string = "id") => `/folders/${id}`,
};

export const pathApp = {
  home: "/",
  login: "/auth/login",
  signup: "/auth/signup",
  profile: "/profile/[id]",
};
