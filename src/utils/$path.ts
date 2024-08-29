export const appPath = {
  home: "/",
  login: "/auth/login",
  signup: "/auth/signup",
  profile: (id: string = "id") => `profile/[${id}]`,
  folderDetail: (id: string = "id") => `/folders/${id}`,
};

export const appRoutes = {
  home: "/",
  login: "/auth/login",
  signup: "/auth/signup",
  profile: "/profile/[id]",
};
