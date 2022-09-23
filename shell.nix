let
  sources = import ./nix/sources.nix;
  pkgs = import sources.nixpkgs { };
in
with pkgs;
mkShell {
  packages = [
    # nix dev tools
    niv
    nixpkgs-fmt
    statix
    # node dev tools
    nodejs-16_x
    nodePackages.eslint
    nodePackages.typescript
    nodePackages.node2nix
  ];

  shellHook = ''
    ${(import ./nix/pre-commit.nix).pre-commit-check.shellHook}
  '';

}
