# worker


```
PS D:\ccc\course\deno\02-typedScript\03-worker> deno run main.ts
Compile file:///D:/ccc/course/deno/02-typedScript/03-worker/main.ts
error: Uncaught Error: read access to "D:\ccc\course\deno\02-typedScript\03-worker\worker.ts", run again with the --allow-read flag
    at WorkerImpl.#poll ($deno$/web/workers.ts:198:17)
PS D:\ccc\course\deno\02-typedScript\03-worker> deno --allow-read run main.ts
error: Found argument '--allow-read' which wasn't expected, or isn't valid in this context
        Did you mean to put '--allow-read' after the subcommand 'run'?

USAGE:
    deno [OPTIONS] [SUBCOMMAND]

For more information try --help
PS D:\ccc\course\deno\02-typedScript\03-worker> deno run --allow-read main.ts
Compile file:///D:/ccc/course/deno/02-typedScript/03-worker/worker.ts
hello world
thread 'deno-worker-0' panicked at 'Failed to post message to host: TrySendError { kind: Disconnected }', cli\ops\worker_host.rs:142:7
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
thread 'main' panicked at 'Worker thread panicked: Any', cli\ops\worker_host.rs:332:11
```
