{
  inputs = {
    dream2nix.url = "github:nix-community/dream2nix";
  };
  outputs =
    { self
    , dream2nix
    ,
    } @ inp:
    dream2nix.lib.makeFlakeOutputs {
      source = ./.;
      systemsFromFile = ./nix_systems;
      config.projectRoot = ./.;
    };
}
