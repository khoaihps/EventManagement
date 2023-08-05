
export function authHeaderTest() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoibWFuYWdlciIsInVzZXJJZCI6IjY0YjcyZGRjZDk3MjhlYWI5YzA1MGRkZiIsImlhdCI6MTY5MDM4NTEyNiwiZXhwIjoxNjkwNDcxNTI2fQ.-xq_MgM_28HgKWOmfRMRU2N4WefPMGSFrWfQ09kp0t8";
    return { Authorization: 'Bearer ' + token };
}
export function authHeaderTestTeamMember() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiZW1wbG95ZWUiLCJ1c2VySWQiOiI2NGI3MmU5ZjlmN2JhZDQ4M2ZmZGFkODMiLCJpYXQiOjE2OTA3MzUwMDYsImV4cCI6MTY5MDgyMTQwNn0.zZbbCD07xYi_8P1oMkoMl0SMPpWGsoY382XHwOOFyYs";
    return { Authorization: 'Bearer ' + token };
}