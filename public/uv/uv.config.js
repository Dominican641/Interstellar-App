self.__uv$config = {
  prefix: "/uv/service/",
  bare: location.hostname == 'localhost' ? location.origin + '/api/bare/' : location.protocol + '//uv.' + location.host + '/',
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/uv/uv.handler.js",
  client: "/uv/uv.client.js",
  bundle: "/uv/uv.bundle.js",
  config: "/uv/uv.config.js",
  sw: "/uv/uv.sw.js",
};
