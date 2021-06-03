type t = Fetch.file;

[@text "{1 Blob superclass}"];

include Blob.Impl({
  type nonrec t = t;
});

[@text "{1 File class}"];

/** @since 0.18.0 */ [@get] external lastModified: t => float;

// [@new] external make: ... = "File";

[@get] external name: t => string;

[@get] external preview: t => string;