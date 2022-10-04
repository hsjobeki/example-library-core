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
      # You can / must specify the following arguments:
      # source, 
      source = ./.;
      # pkgs ? null,

      # systems ? [],
      # systemsFromFile ? null,
      systemsFromFile = ./nix_systems;
      # config ? {},
      config.projectRoot = ./.;

      # inject = {

      # };
      # sourceOverrides ? oldSources: {},
      # sourceOverrides = oldSources: {
      #   "@secunet/mui-theme" = {
      #     "v1.0.0" = {
      #       type =  "git";
      #       rev = "321012d23f309935a0ba40cad284510ca8b6c1be";
      #       inherit (theme) url;
      #     };
      #   };
      # };

      # pname ? throw "Please pass `pname` to makeFlakeOutputs",
      # packageOverrides ? {},
      # packageOverrides = {
      #   # name of the package
      #   my-app = {
      #     # name the override (arbitrary name)
      #     add-post-build = {
      #       # override installPhase
      #       installPhase = ''
      #       cp -r ./build/ $out/
      #       '';

      #       # update buildInputs 
      #       # buildInputs = old: old ++ [pkgs.hello];
      #     };
      #   };
      # };

      # projects ? {},
      # settings ? [],

    };
}
