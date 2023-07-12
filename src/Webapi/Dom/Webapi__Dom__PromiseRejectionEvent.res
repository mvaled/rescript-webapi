type t

include Webapi__Dom__Event.Impl({
  type t = t
})

@get external promise: t => Js.Promise2.t<'a> = "promise"
@get external reason: t => 'a = "reason"
