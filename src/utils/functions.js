export function editNames(name) {
    const check = name.indexOf("-");
    if (check === -1) return name.charAt(0).toUpperCase() + name.slice(1)

    const splitName = name.split(/\-/);
    const arr = [];

    for (const name of splitName) {
        arr.push(name.charAt(0).toUpperCase() + name.slice(1))
    };

    return arr.join("-");
};