refineText = (source, bannedWorlds = []) => {
  return [normalizeWhitespcae, compactWhiteSpcae, maskBannedWords].reduce(
    (value, filter) => {
      return filter(value, bannedWorlds);
    },
    source
  );
};

module.exports = refineText;

const compactWhiteSpcae = (source) => {
  return source.indexOf("  ") < 0
    ? source
    : compactWhiteSpcae(source.replace("  ", " "));
};

function maskBannedWords(source, bannedWorlds) {
  bannedWorlds.forEach((bannedWorld) => {
    const mask = "*".repeat(bannedWorld.length);
    source = source.replace(bannedWorld, mask);
  });
  return source;
}

function normalizeWhitespcae(source) {
  return source.replace("\t", " ");
}
