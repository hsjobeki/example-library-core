final: prev:
let
  sources = import ./sources.nix;
  nodejs = final.nodejs-16_x;
  inherit (import sources."gitignore.nix" { inherit (final) lib; }) gitignoreSource;

  # get some attrs of auto-generated node.nix file
  inherit (final.callPackage ./node.nix { pkgs = final; inherit nodejs; }) nodeDependencies package;
in
{
  secunet = prev.secunet or { } // {
    secunet-mui-theme = final.callPackage ./build.nix {
      inherit package nodejs nodeDependencies gitignoreSource;
    };
  };
}
