refineText = (s, bannedWorlds = []) => {
  s = s
    .replace("   ", " ")
    .replace("  ", " ")
    .replace("   ", " ")
    .replace("  ", " ")
    .replace(" \t", " ")
    .replace("\t ", " ");

  bannedWorlds.forEach((bannedWorld) => {
    // console.log("@@@", { bannedWorld, re: "*".repeat(bannedWorld.length) });
    s = s.replace(bannedWorld, "*".repeat(bannedWorld.length));
  });

  return s;
};

module.exports = refineText;
