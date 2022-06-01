const f = (x) => {
    return () => {
        console.log(x);
    }
};

f("leo")();