"use strict";
var e = ({ action: e }, { services: t, exceptions: a }) => {
  const { ServiceUnavailableException: c } = a;
  e("files.upload", async (e, a) => {
    try {
      const c = e.payload.filename_download;
      if ("svg" !== c.substr(c.length - 3)) return;
      const { ItemsService: n, AssetsService: s } = t,
        i = new n(e.collection, {
          schema: a.schema,
          accountability: a.accountability,
        }),
        o = new s({ schema: a.schema, accountability: a.accountability }),
        r = await o.getAsset(e.key, {}),
        l = [];
      r.stream.on("data", function (e) {
        l.push(e);
      }),
        r.stream.on("end", async function () {
          await i.updateOne(e.key, { svg_code: Buffer.concat(l).toString() });
        });
    } catch (e) {
      throw new c(e);
    }
  });
};
module.exports = e;
