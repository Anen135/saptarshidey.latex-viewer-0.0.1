(function () {
    const input = document.getElementById("mathInput");
    const output = document.getElementById("math");

    input.value = localStorage.getItem("latexInput") || "";

    const updateMath = () => {
        const raw = input.value;
        const formatted = raw.replace(/\n/g, '\\\\'); 
        output.innerHTML = `$$${formatted}$$`;
        MathJax.typeset();
    };

    updateMath();

    input.addEventListener("input", (evt) => {
        localStorage.setItem("latexInput", input.value);
        updateMath();
    });
})();
