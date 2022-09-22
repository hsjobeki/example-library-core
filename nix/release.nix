let
  sources = import ./sources.nix;
  pkgs = import sources.nixpkgs { overlays = [ (import ./overlay.nix) ]; };
in
{
  inherit (pkgs.secunet) secunet-mui-theme ;
}
