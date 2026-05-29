const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

const currentTheme = localStorage.getItem("theme");

if (currentTheme) {

  document.documentElement.setAttribute("data-theme",currentTheme);

              updateIcon(currentTheme);
              }

              themeToggle.addEventListener("click", () => {

                let theme =
                    document.documentElement.getAttribute("data-theme");

                      theme = theme === "dark"
                          ? "light"
                              : "dark";

                                document.documentElement.setAttribute(
                                    "data-theme",
                                        theme
                                          );

                                            localStorage.setItem("theme", theme);

                                              updateIcon(theme);

                                              });

                                              function updateIcon(theme) {

                                                if (theme === "dark") {

                                                    themeIcon.classList.remove("fa-sun");
                                                        themeIcon.classList.add("fa-moon");

                                                          } else {

                                                              themeIcon.classList.remove("fa-moon");
                                                                  themeIcon.classList.add("fa-sun");

                                                                    }

                                                                    }
