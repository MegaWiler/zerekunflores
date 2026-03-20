window.onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        document.body.classList.remove("container");
        clearTimeout(c);
    }, 1000);
};
