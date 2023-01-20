
export const getAccountType = () => sessionStorage.getItem("accountType");

export const setAccountType = (type: string) => sessionStorage.setItem("accountType", type);

export const setJobType = (type: string) => sessionStorage.setItem("jobType", type);