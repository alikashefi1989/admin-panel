const apiUri: Record<string, (...arg: any) => string> = {
    login: () => `api/auth/login`,
    logout: (userId: string) => `api/auth/logout/${userId}`,
}

export default apiUri