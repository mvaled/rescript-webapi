module type Reader = {
  type t
  type closed

  @send external closed: t => Js.Promise2.t<closed> = "closed"
  @send external cancel: t => Js.Promise2.t<unit> = "cancel"
  @send external cancelWith: (t, string) => Js.Promise2.t<string> = "cancel"
  @send external releaseLock: t => unit = "releaseLock"
}

module rec DefaultReader: {
  include Reader
  @send external read: t => Js.Promise2.t<Webapi__Iterator.next<string>> = "read"
} = DefaultReader

module rec BYOBReader: {
  include Reader
} = BYOBReader

// [@send]  external read: t => view => Js.Promise2.t(Webapi__Iterator.Next.t(string)) = "read";

type t

@get external locked: t => bool = "locked"
@send external cancel: t => Js.Promise2.t<unit> = "cancel"
@send external cancelWith: (t, string) => Js.Promise2.t<string> = "cancel"
@send external getReader: t => DefaultReader.t = "getReader"
@send
external getReaderBYOB: (t, @as(json`{"mode": "byob"}`) _) => BYOBReader.t = "getReader"
@send external tee: t => (t, t) = "tee"
