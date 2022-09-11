refineText = (s, bannedWorlds = []) => {
  s = s
    .replace("   ", " ")
    .replace("  ", " ")
    .replace("   ", " ")
    .replace("  ", " ")
    .replace(" \t", " ")
    .replace("\t ", " ");

  bannedWorlds.forEach((bannedWorld) => {
    s = s.replace(bannedWorld, "********");
  });

  return s;
};

module.exports = refineText;
