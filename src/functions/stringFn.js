function excerpt(text) {
    return text.length > 100 ? text.substring(0, 100) + "..." : text;
}

function initials(name) {
    return name.split(" ").map(w => w.charAt(0)).join("").toUpperCase();
}

export {
    excerpt,
    initials
}