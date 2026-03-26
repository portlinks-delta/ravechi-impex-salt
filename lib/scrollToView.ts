export const scrollToView = (id: string) => {
  if (!id) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/");
    return;
  }

  const el = document.getElementById(id);

  if (el) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    window.history.pushState(null, "", `/#${id}`);
  }
};
