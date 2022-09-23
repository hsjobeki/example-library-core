let
  sources = import ./sources.nix;
  pkgs = import sources.nixpkgs { overlays = [ (import ./overlay.nix) ]; };
in
{
  inherit (pkgs.secunet) mui-theme;
}
