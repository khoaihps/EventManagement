const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoibWFuYWdlciIsInVzZXJJZCI6IjY0YjcyZGRjZDk3MjhlYWI5YzA1MGRkZiIsImlhdCI6MTY5MDM4NTEyNiwiZXhwIjoxNjkwNDcxNTI2fQ.-xq_MgM_28HgKWOmfRMRU2N4WefPMGSFrWfQ09kp0t8";

export default function authHeaderTest() {
    return { Authorization: 'Bearer ' + token };
}