(function(window, undefined) {
  var dictionary = {
    "4dddb862-1a6d-486c-a949-98e8b039a5b5": "Perfil do Usuário",
    "21b9eed9-5da1-4714-b2a4-b6595b4c2354": "WatchList",
    "06a3c856-55fb-46f6-9773-3becbb2278ad": "Detalhes Filme/Série",
    "1a30748e-9a76-4cf1-bdf2-985bfb3fd10c": "Página Resultado Busca",
    "e52ccebf-ac7e-4661-bc26-e12d090f7331": "Autenticação",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Landing Page",
    "65076217-6e4a-4126-b832-00dd0cb9d442": "Detalhes Filme/Série 2",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);