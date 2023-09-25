
export const header = (method, data,) => {
    const requestOptions = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    return requestOptions;
}
export const toastify = (cb, text, theme) => {

    return cb(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: theme,
    });
}








