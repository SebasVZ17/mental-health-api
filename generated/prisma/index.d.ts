
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model checkins
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type checkins = $Result.DefaultSelection<Prisma.$checkinsPayload>
/**
 * Model citas
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type citas = $Result.DefaultSelection<Prisma.$citasPayload>
/**
 * Model mensajes
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type mensajes = $Result.DefaultSelection<Prisma.$mensajesPayload>
/**
 * Model psicologos
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type psicologos = $Result.DefaultSelection<Prisma.$psicologosPayload>
/**
 * Model recomendaciones
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type recomendaciones = $Result.DefaultSelection<Prisma.$recomendacionesPayload>
/**
 * Model recomendaciones_empleado
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type recomendaciones_empleado = $Result.DefaultSelection<Prisma.$recomendaciones_empleadoPayload>
/**
 * Model usuarios
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>
/**
 * Model valoraciones
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type valoraciones = $Result.DefaultSelection<Prisma.$valoracionesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Checkins
 * const checkins = await prisma.checkins.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Checkins
   * const checkins = await prisma.checkins.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.checkins`: Exposes CRUD operations for the **checkins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checkins
    * const checkins = await prisma.checkins.findMany()
    * ```
    */
  get checkins(): Prisma.checkinsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.citas`: Exposes CRUD operations for the **citas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Citas
    * const citas = await prisma.citas.findMany()
    * ```
    */
  get citas(): Prisma.citasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mensajes`: Exposes CRUD operations for the **mensajes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensajes
    * const mensajes = await prisma.mensajes.findMany()
    * ```
    */
  get mensajes(): Prisma.mensajesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.psicologos`: Exposes CRUD operations for the **psicologos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Psicologos
    * const psicologos = await prisma.psicologos.findMany()
    * ```
    */
  get psicologos(): Prisma.psicologosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recomendaciones`: Exposes CRUD operations for the **recomendaciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recomendaciones
    * const recomendaciones = await prisma.recomendaciones.findMany()
    * ```
    */
  get recomendaciones(): Prisma.recomendacionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recomendaciones_empleado`: Exposes CRUD operations for the **recomendaciones_empleado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recomendaciones_empleados
    * const recomendaciones_empleados = await prisma.recomendaciones_empleado.findMany()
    * ```
    */
  get recomendaciones_empleado(): Prisma.recomendaciones_empleadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.valoraciones`: Exposes CRUD operations for the **valoraciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Valoraciones
    * const valoraciones = await prisma.valoraciones.findMany()
    * ```
    */
  get valoraciones(): Prisma.valoracionesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    checkins: 'checkins',
    citas: 'citas',
    mensajes: 'mensajes',
    psicologos: 'psicologos',
    recomendaciones: 'recomendaciones',
    recomendaciones_empleado: 'recomendaciones_empleado',
    usuarios: 'usuarios',
    valoraciones: 'valoraciones'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "checkins" | "citas" | "mensajes" | "psicologos" | "recomendaciones" | "recomendaciones_empleado" | "usuarios" | "valoraciones"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      checkins: {
        payload: Prisma.$checkinsPayload<ExtArgs>
        fields: Prisma.checkinsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.checkinsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkinsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.checkinsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkinsPayload>
          }
          findFirst: {
            args: Prisma.checkinsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkinsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.checkinsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkinsPayload>
          }
          findMany: {
            args: Prisma.checkinsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkinsPayload>[]
          }
          create: {
            args: Prisma.checkinsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkinsPayload>
          }
          createMany: {
            args: Prisma.checkinsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.checkinsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkinsPayload>[]
          }
          delete: {
            args: Prisma.checkinsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkinsPayload>
          }
          update: {
            args: Prisma.checkinsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkinsPayload>
          }
          deleteMany: {
            args: Prisma.checkinsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.checkinsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.checkinsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkinsPayload>[]
          }
          upsert: {
            args: Prisma.checkinsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkinsPayload>
          }
          aggregate: {
            args: Prisma.CheckinsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckins>
          }
          groupBy: {
            args: Prisma.checkinsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckinsGroupByOutputType>[]
          }
          count: {
            args: Prisma.checkinsCountArgs<ExtArgs>
            result: $Utils.Optional<CheckinsCountAggregateOutputType> | number
          }
        }
      }
      citas: {
        payload: Prisma.$citasPayload<ExtArgs>
        fields: Prisma.citasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.citasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.citasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citasPayload>
          }
          findFirst: {
            args: Prisma.citasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.citasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citasPayload>
          }
          findMany: {
            args: Prisma.citasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citasPayload>[]
          }
          create: {
            args: Prisma.citasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citasPayload>
          }
          createMany: {
            args: Prisma.citasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.citasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citasPayload>[]
          }
          delete: {
            args: Prisma.citasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citasPayload>
          }
          update: {
            args: Prisma.citasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citasPayload>
          }
          deleteMany: {
            args: Prisma.citasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.citasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.citasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citasPayload>[]
          }
          upsert: {
            args: Prisma.citasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$citasPayload>
          }
          aggregate: {
            args: Prisma.CitasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCitas>
          }
          groupBy: {
            args: Prisma.citasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CitasGroupByOutputType>[]
          }
          count: {
            args: Prisma.citasCountArgs<ExtArgs>
            result: $Utils.Optional<CitasCountAggregateOutputType> | number
          }
        }
      }
      mensajes: {
        payload: Prisma.$mensajesPayload<ExtArgs>
        fields: Prisma.mensajesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mensajesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mensajesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>
          }
          findFirst: {
            args: Prisma.mensajesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mensajesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>
          }
          findMany: {
            args: Prisma.mensajesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>[]
          }
          create: {
            args: Prisma.mensajesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>
          }
          createMany: {
            args: Prisma.mensajesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mensajesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>[]
          }
          delete: {
            args: Prisma.mensajesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>
          }
          update: {
            args: Prisma.mensajesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>
          }
          deleteMany: {
            args: Prisma.mensajesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mensajesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mensajesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>[]
          }
          upsert: {
            args: Prisma.mensajesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mensajesPayload>
          }
          aggregate: {
            args: Prisma.MensajesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensajes>
          }
          groupBy: {
            args: Prisma.mensajesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensajesGroupByOutputType>[]
          }
          count: {
            args: Prisma.mensajesCountArgs<ExtArgs>
            result: $Utils.Optional<MensajesCountAggregateOutputType> | number
          }
        }
      }
      psicologos: {
        payload: Prisma.$psicologosPayload<ExtArgs>
        fields: Prisma.psicologosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.psicologosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psicologosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.psicologosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psicologosPayload>
          }
          findFirst: {
            args: Prisma.psicologosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psicologosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.psicologosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psicologosPayload>
          }
          findMany: {
            args: Prisma.psicologosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psicologosPayload>[]
          }
          create: {
            args: Prisma.psicologosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psicologosPayload>
          }
          createMany: {
            args: Prisma.psicologosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.psicologosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psicologosPayload>[]
          }
          delete: {
            args: Prisma.psicologosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psicologosPayload>
          }
          update: {
            args: Prisma.psicologosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psicologosPayload>
          }
          deleteMany: {
            args: Prisma.psicologosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.psicologosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.psicologosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psicologosPayload>[]
          }
          upsert: {
            args: Prisma.psicologosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$psicologosPayload>
          }
          aggregate: {
            args: Prisma.PsicologosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePsicologos>
          }
          groupBy: {
            args: Prisma.psicologosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PsicologosGroupByOutputType>[]
          }
          count: {
            args: Prisma.psicologosCountArgs<ExtArgs>
            result: $Utils.Optional<PsicologosCountAggregateOutputType> | number
          }
        }
      }
      recomendaciones: {
        payload: Prisma.$recomendacionesPayload<ExtArgs>
        fields: Prisma.recomendacionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recomendacionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendacionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recomendacionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendacionesPayload>
          }
          findFirst: {
            args: Prisma.recomendacionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendacionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recomendacionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendacionesPayload>
          }
          findMany: {
            args: Prisma.recomendacionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendacionesPayload>[]
          }
          create: {
            args: Prisma.recomendacionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendacionesPayload>
          }
          createMany: {
            args: Prisma.recomendacionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.recomendacionesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendacionesPayload>[]
          }
          delete: {
            args: Prisma.recomendacionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendacionesPayload>
          }
          update: {
            args: Prisma.recomendacionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendacionesPayload>
          }
          deleteMany: {
            args: Prisma.recomendacionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recomendacionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.recomendacionesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendacionesPayload>[]
          }
          upsert: {
            args: Prisma.recomendacionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendacionesPayload>
          }
          aggregate: {
            args: Prisma.RecomendacionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecomendaciones>
          }
          groupBy: {
            args: Prisma.recomendacionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecomendacionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.recomendacionesCountArgs<ExtArgs>
            result: $Utils.Optional<RecomendacionesCountAggregateOutputType> | number
          }
        }
      }
      recomendaciones_empleado: {
        payload: Prisma.$recomendaciones_empleadoPayload<ExtArgs>
        fields: Prisma.recomendaciones_empleadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recomendaciones_empleadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendaciones_empleadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recomendaciones_empleadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendaciones_empleadoPayload>
          }
          findFirst: {
            args: Prisma.recomendaciones_empleadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendaciones_empleadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recomendaciones_empleadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendaciones_empleadoPayload>
          }
          findMany: {
            args: Prisma.recomendaciones_empleadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendaciones_empleadoPayload>[]
          }
          create: {
            args: Prisma.recomendaciones_empleadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendaciones_empleadoPayload>
          }
          createMany: {
            args: Prisma.recomendaciones_empleadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.recomendaciones_empleadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendaciones_empleadoPayload>[]
          }
          delete: {
            args: Prisma.recomendaciones_empleadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendaciones_empleadoPayload>
          }
          update: {
            args: Prisma.recomendaciones_empleadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendaciones_empleadoPayload>
          }
          deleteMany: {
            args: Prisma.recomendaciones_empleadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recomendaciones_empleadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.recomendaciones_empleadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendaciones_empleadoPayload>[]
          }
          upsert: {
            args: Prisma.recomendaciones_empleadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recomendaciones_empleadoPayload>
          }
          aggregate: {
            args: Prisma.Recomendaciones_empleadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecomendaciones_empleado>
          }
          groupBy: {
            args: Prisma.recomendaciones_empleadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Recomendaciones_empleadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.recomendaciones_empleadoCountArgs<ExtArgs>
            result: $Utils.Optional<Recomendaciones_empleadoCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      valoraciones: {
        payload: Prisma.$valoracionesPayload<ExtArgs>
        fields: Prisma.valoracionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.valoracionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valoracionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.valoracionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valoracionesPayload>
          }
          findFirst: {
            args: Prisma.valoracionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valoracionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.valoracionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valoracionesPayload>
          }
          findMany: {
            args: Prisma.valoracionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valoracionesPayload>[]
          }
          create: {
            args: Prisma.valoracionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valoracionesPayload>
          }
          createMany: {
            args: Prisma.valoracionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.valoracionesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valoracionesPayload>[]
          }
          delete: {
            args: Prisma.valoracionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valoracionesPayload>
          }
          update: {
            args: Prisma.valoracionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valoracionesPayload>
          }
          deleteMany: {
            args: Prisma.valoracionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.valoracionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.valoracionesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valoracionesPayload>[]
          }
          upsert: {
            args: Prisma.valoracionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$valoracionesPayload>
          }
          aggregate: {
            args: Prisma.ValoracionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValoraciones>
          }
          groupBy: {
            args: Prisma.valoracionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValoracionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.valoracionesCountArgs<ExtArgs>
            result: $Utils.Optional<ValoracionesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    checkins?: checkinsOmit
    citas?: citasOmit
    mensajes?: mensajesOmit
    psicologos?: psicologosOmit
    recomendaciones?: recomendacionesOmit
    recomendaciones_empleado?: recomendaciones_empleadoOmit
    usuarios?: usuariosOmit
    valoraciones?: valoracionesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CitasCountOutputType
   */

  export type CitasCountOutputType = {
    valoraciones: number
  }

  export type CitasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    valoraciones?: boolean | CitasCountOutputTypeCountValoracionesArgs
  }

  // Custom InputTypes
  /**
   * CitasCountOutputType without action
   */
  export type CitasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitasCountOutputType
     */
    select?: CitasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CitasCountOutputType without action
   */
  export type CitasCountOutputTypeCountValoracionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: valoracionesWhereInput
  }


  /**
   * Count Type RecomendacionesCountOutputType
   */

  export type RecomendacionesCountOutputType = {
    recomendaciones_empleado: number
  }

  export type RecomendacionesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recomendaciones_empleado?: boolean | RecomendacionesCountOutputTypeCountRecomendaciones_empleadoArgs
  }

  // Custom InputTypes
  /**
   * RecomendacionesCountOutputType without action
   */
  export type RecomendacionesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecomendacionesCountOutputType
     */
    select?: RecomendacionesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecomendacionesCountOutputType without action
   */
  export type RecomendacionesCountOutputTypeCountRecomendaciones_empleadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recomendaciones_empleadoWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    checkins: number
    citas_citas_empleado_idTousuarios: number
    citas_citas_psicologo_idTousuarios: number
    mensajes_mensajes_destinatario_idTousuarios: number
    mensajes_mensajes_remitente_idTousuarios: number
    recomendaciones_empleado: number
    valoraciones_valoraciones_empleado_idTousuarios: number
    valoraciones_valoraciones_psicologo_idTousuarios: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkins?: boolean | UsuariosCountOutputTypeCountCheckinsArgs
    citas_citas_empleado_idTousuarios?: boolean | UsuariosCountOutputTypeCountCitas_citas_empleado_idTousuariosArgs
    citas_citas_psicologo_idTousuarios?: boolean | UsuariosCountOutputTypeCountCitas_citas_psicologo_idTousuariosArgs
    mensajes_mensajes_destinatario_idTousuarios?: boolean | UsuariosCountOutputTypeCountMensajes_mensajes_destinatario_idTousuariosArgs
    mensajes_mensajes_remitente_idTousuarios?: boolean | UsuariosCountOutputTypeCountMensajes_mensajes_remitente_idTousuariosArgs
    recomendaciones_empleado?: boolean | UsuariosCountOutputTypeCountRecomendaciones_empleadoArgs
    valoraciones_valoraciones_empleado_idTousuarios?: boolean | UsuariosCountOutputTypeCountValoraciones_valoraciones_empleado_idTousuariosArgs
    valoraciones_valoraciones_psicologo_idTousuarios?: boolean | UsuariosCountOutputTypeCountValoraciones_valoraciones_psicologo_idTousuariosArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountCheckinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: checkinsWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountCitas_citas_empleado_idTousuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: citasWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountCitas_citas_psicologo_idTousuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: citasWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountMensajes_mensajes_destinatario_idTousuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mensajesWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountMensajes_mensajes_remitente_idTousuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mensajesWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountRecomendaciones_empleadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recomendaciones_empleadoWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountValoraciones_valoraciones_empleado_idTousuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: valoracionesWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountValoraciones_valoraciones_psicologo_idTousuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: valoracionesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model checkins
   */

  export type AggregateCheckins = {
    _count: CheckinsCountAggregateOutputType | null
    _avg: CheckinsAvgAggregateOutputType | null
    _sum: CheckinsSumAggregateOutputType | null
    _min: CheckinsMinAggregateOutputType | null
    _max: CheckinsMaxAggregateOutputType | null
  }

  export type CheckinsAvgAggregateOutputType = {
    estado_animo: number | null
    nivel_estres: number | null
    horas_sueno: Decimal | null
  }

  export type CheckinsSumAggregateOutputType = {
    estado_animo: number | null
    nivel_estres: number | null
    horas_sueno: Decimal | null
  }

  export type CheckinsMinAggregateOutputType = {
    id: string | null
    empleado_id: string | null
    fecha: Date | null
    estado_animo: number | null
    nivel_estres: number | null
    horas_sueno: Decimal | null
    notas: string | null
    creado_en: Date | null
  }

  export type CheckinsMaxAggregateOutputType = {
    id: string | null
    empleado_id: string | null
    fecha: Date | null
    estado_animo: number | null
    nivel_estres: number | null
    horas_sueno: Decimal | null
    notas: string | null
    creado_en: Date | null
  }

  export type CheckinsCountAggregateOutputType = {
    id: number
    empleado_id: number
    fecha: number
    estado_animo: number
    nivel_estres: number
    horas_sueno: number
    notas: number
    creado_en: number
    _all: number
  }


  export type CheckinsAvgAggregateInputType = {
    estado_animo?: true
    nivel_estres?: true
    horas_sueno?: true
  }

  export type CheckinsSumAggregateInputType = {
    estado_animo?: true
    nivel_estres?: true
    horas_sueno?: true
  }

  export type CheckinsMinAggregateInputType = {
    id?: true
    empleado_id?: true
    fecha?: true
    estado_animo?: true
    nivel_estres?: true
    horas_sueno?: true
    notas?: true
    creado_en?: true
  }

  export type CheckinsMaxAggregateInputType = {
    id?: true
    empleado_id?: true
    fecha?: true
    estado_animo?: true
    nivel_estres?: true
    horas_sueno?: true
    notas?: true
    creado_en?: true
  }

  export type CheckinsCountAggregateInputType = {
    id?: true
    empleado_id?: true
    fecha?: true
    estado_animo?: true
    nivel_estres?: true
    horas_sueno?: true
    notas?: true
    creado_en?: true
    _all?: true
  }

  export type CheckinsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which checkins to aggregate.
     */
    where?: checkinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of checkins to fetch.
     */
    orderBy?: checkinsOrderByWithRelationInput | checkinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: checkinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` checkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned checkins
    **/
    _count?: true | CheckinsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CheckinsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CheckinsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckinsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckinsMaxAggregateInputType
  }

  export type GetCheckinsAggregateType<T extends CheckinsAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckins[P]>
      : GetScalarType<T[P], AggregateCheckins[P]>
  }




  export type checkinsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: checkinsWhereInput
    orderBy?: checkinsOrderByWithAggregationInput | checkinsOrderByWithAggregationInput[]
    by: CheckinsScalarFieldEnum[] | CheckinsScalarFieldEnum
    having?: checkinsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckinsCountAggregateInputType | true
    _avg?: CheckinsAvgAggregateInputType
    _sum?: CheckinsSumAggregateInputType
    _min?: CheckinsMinAggregateInputType
    _max?: CheckinsMaxAggregateInputType
  }

  export type CheckinsGroupByOutputType = {
    id: string
    empleado_id: string
    fecha: Date
    estado_animo: number
    nivel_estres: number
    horas_sueno: Decimal | null
    notas: string | null
    creado_en: Date | null
    _count: CheckinsCountAggregateOutputType | null
    _avg: CheckinsAvgAggregateOutputType | null
    _sum: CheckinsSumAggregateOutputType | null
    _min: CheckinsMinAggregateOutputType | null
    _max: CheckinsMaxAggregateOutputType | null
  }

  type GetCheckinsGroupByPayload<T extends checkinsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckinsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckinsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckinsGroupByOutputType[P]>
            : GetScalarType<T[P], CheckinsGroupByOutputType[P]>
        }
      >
    >


  export type checkinsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleado_id?: boolean
    fecha?: boolean
    estado_animo?: boolean
    nivel_estres?: boolean
    horas_sueno?: boolean
    notas?: boolean
    creado_en?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkins"]>

  export type checkinsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleado_id?: boolean
    fecha?: boolean
    estado_animo?: boolean
    nivel_estres?: boolean
    horas_sueno?: boolean
    notas?: boolean
    creado_en?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkins"]>

  export type checkinsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleado_id?: boolean
    fecha?: boolean
    estado_animo?: boolean
    nivel_estres?: boolean
    horas_sueno?: boolean
    notas?: boolean
    creado_en?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkins"]>

  export type checkinsSelectScalar = {
    id?: boolean
    empleado_id?: boolean
    fecha?: boolean
    estado_animo?: boolean
    nivel_estres?: boolean
    horas_sueno?: boolean
    notas?: boolean
    creado_en?: boolean
  }

  export type checkinsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "empleado_id" | "fecha" | "estado_animo" | "nivel_estres" | "horas_sueno" | "notas" | "creado_en", ExtArgs["result"]["checkins"]>
  export type checkinsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type checkinsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type checkinsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $checkinsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "checkins"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      empleado_id: string
      fecha: Date
      estado_animo: number
      nivel_estres: number
      horas_sueno: Prisma.Decimal | null
      notas: string | null
      creado_en: Date | null
    }, ExtArgs["result"]["checkins"]>
    composites: {}
  }

  type checkinsGetPayload<S extends boolean | null | undefined | checkinsDefaultArgs> = $Result.GetResult<Prisma.$checkinsPayload, S>

  type checkinsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<checkinsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckinsCountAggregateInputType | true
    }

  export interface checkinsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['checkins'], meta: { name: 'checkins' } }
    /**
     * Find zero or one Checkins that matches the filter.
     * @param {checkinsFindUniqueArgs} args - Arguments to find a Checkins
     * @example
     * // Get one Checkins
     * const checkins = await prisma.checkins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends checkinsFindUniqueArgs>(args: SelectSubset<T, checkinsFindUniqueArgs<ExtArgs>>): Prisma__checkinsClient<$Result.GetResult<Prisma.$checkinsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Checkins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {checkinsFindUniqueOrThrowArgs} args - Arguments to find a Checkins
     * @example
     * // Get one Checkins
     * const checkins = await prisma.checkins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends checkinsFindUniqueOrThrowArgs>(args: SelectSubset<T, checkinsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__checkinsClient<$Result.GetResult<Prisma.$checkinsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checkins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checkinsFindFirstArgs} args - Arguments to find a Checkins
     * @example
     * // Get one Checkins
     * const checkins = await prisma.checkins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends checkinsFindFirstArgs>(args?: SelectSubset<T, checkinsFindFirstArgs<ExtArgs>>): Prisma__checkinsClient<$Result.GetResult<Prisma.$checkinsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checkins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checkinsFindFirstOrThrowArgs} args - Arguments to find a Checkins
     * @example
     * // Get one Checkins
     * const checkins = await prisma.checkins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends checkinsFindFirstOrThrowArgs>(args?: SelectSubset<T, checkinsFindFirstOrThrowArgs<ExtArgs>>): Prisma__checkinsClient<$Result.GetResult<Prisma.$checkinsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checkins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checkinsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checkins
     * const checkins = await prisma.checkins.findMany()
     * 
     * // Get first 10 Checkins
     * const checkins = await prisma.checkins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkinsWithIdOnly = await prisma.checkins.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends checkinsFindManyArgs>(args?: SelectSubset<T, checkinsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$checkinsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Checkins.
     * @param {checkinsCreateArgs} args - Arguments to create a Checkins.
     * @example
     * // Create one Checkins
     * const Checkins = await prisma.checkins.create({
     *   data: {
     *     // ... data to create a Checkins
     *   }
     * })
     * 
     */
    create<T extends checkinsCreateArgs>(args: SelectSubset<T, checkinsCreateArgs<ExtArgs>>): Prisma__checkinsClient<$Result.GetResult<Prisma.$checkinsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Checkins.
     * @param {checkinsCreateManyArgs} args - Arguments to create many Checkins.
     * @example
     * // Create many Checkins
     * const checkins = await prisma.checkins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends checkinsCreateManyArgs>(args?: SelectSubset<T, checkinsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Checkins and returns the data saved in the database.
     * @param {checkinsCreateManyAndReturnArgs} args - Arguments to create many Checkins.
     * @example
     * // Create many Checkins
     * const checkins = await prisma.checkins.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Checkins and only return the `id`
     * const checkinsWithIdOnly = await prisma.checkins.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends checkinsCreateManyAndReturnArgs>(args?: SelectSubset<T, checkinsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$checkinsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Checkins.
     * @param {checkinsDeleteArgs} args - Arguments to delete one Checkins.
     * @example
     * // Delete one Checkins
     * const Checkins = await prisma.checkins.delete({
     *   where: {
     *     // ... filter to delete one Checkins
     *   }
     * })
     * 
     */
    delete<T extends checkinsDeleteArgs>(args: SelectSubset<T, checkinsDeleteArgs<ExtArgs>>): Prisma__checkinsClient<$Result.GetResult<Prisma.$checkinsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Checkins.
     * @param {checkinsUpdateArgs} args - Arguments to update one Checkins.
     * @example
     * // Update one Checkins
     * const checkins = await prisma.checkins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends checkinsUpdateArgs>(args: SelectSubset<T, checkinsUpdateArgs<ExtArgs>>): Prisma__checkinsClient<$Result.GetResult<Prisma.$checkinsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Checkins.
     * @param {checkinsDeleteManyArgs} args - Arguments to filter Checkins to delete.
     * @example
     * // Delete a few Checkins
     * const { count } = await prisma.checkins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends checkinsDeleteManyArgs>(args?: SelectSubset<T, checkinsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checkinsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checkins
     * const checkins = await prisma.checkins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends checkinsUpdateManyArgs>(args: SelectSubset<T, checkinsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkins and returns the data updated in the database.
     * @param {checkinsUpdateManyAndReturnArgs} args - Arguments to update many Checkins.
     * @example
     * // Update many Checkins
     * const checkins = await prisma.checkins.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Checkins and only return the `id`
     * const checkinsWithIdOnly = await prisma.checkins.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends checkinsUpdateManyAndReturnArgs>(args: SelectSubset<T, checkinsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$checkinsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Checkins.
     * @param {checkinsUpsertArgs} args - Arguments to update or create a Checkins.
     * @example
     * // Update or create a Checkins
     * const checkins = await prisma.checkins.upsert({
     *   create: {
     *     // ... data to create a Checkins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checkins we want to update
     *   }
     * })
     */
    upsert<T extends checkinsUpsertArgs>(args: SelectSubset<T, checkinsUpsertArgs<ExtArgs>>): Prisma__checkinsClient<$Result.GetResult<Prisma.$checkinsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Checkins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checkinsCountArgs} args - Arguments to filter Checkins to count.
     * @example
     * // Count the number of Checkins
     * const count = await prisma.checkins.count({
     *   where: {
     *     // ... the filter for the Checkins we want to count
     *   }
     * })
    **/
    count<T extends checkinsCountArgs>(
      args?: Subset<T, checkinsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckinsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checkins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckinsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CheckinsAggregateArgs>(args: Subset<T, CheckinsAggregateArgs>): Prisma.PrismaPromise<GetCheckinsAggregateType<T>>

    /**
     * Group by Checkins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checkinsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends checkinsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: checkinsGroupByArgs['orderBy'] }
        : { orderBy?: checkinsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, checkinsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckinsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the checkins model
   */
  readonly fields: checkinsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for checkins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__checkinsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the checkins model
   */
  interface checkinsFieldRefs {
    readonly id: FieldRef<"checkins", 'String'>
    readonly empleado_id: FieldRef<"checkins", 'String'>
    readonly fecha: FieldRef<"checkins", 'DateTime'>
    readonly estado_animo: FieldRef<"checkins", 'Int'>
    readonly nivel_estres: FieldRef<"checkins", 'Int'>
    readonly horas_sueno: FieldRef<"checkins", 'Decimal'>
    readonly notas: FieldRef<"checkins", 'String'>
    readonly creado_en: FieldRef<"checkins", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * checkins findUnique
   */
  export type checkinsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkins
     */
    select?: checkinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkins
     */
    omit?: checkinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkinsInclude<ExtArgs> | null
    /**
     * Filter, which checkins to fetch.
     */
    where: checkinsWhereUniqueInput
  }

  /**
   * checkins findUniqueOrThrow
   */
  export type checkinsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkins
     */
    select?: checkinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkins
     */
    omit?: checkinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkinsInclude<ExtArgs> | null
    /**
     * Filter, which checkins to fetch.
     */
    where: checkinsWhereUniqueInput
  }

  /**
   * checkins findFirst
   */
  export type checkinsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkins
     */
    select?: checkinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkins
     */
    omit?: checkinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkinsInclude<ExtArgs> | null
    /**
     * Filter, which checkins to fetch.
     */
    where?: checkinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of checkins to fetch.
     */
    orderBy?: checkinsOrderByWithRelationInput | checkinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for checkins.
     */
    cursor?: checkinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` checkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of checkins.
     */
    distinct?: CheckinsScalarFieldEnum | CheckinsScalarFieldEnum[]
  }

  /**
   * checkins findFirstOrThrow
   */
  export type checkinsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkins
     */
    select?: checkinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkins
     */
    omit?: checkinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkinsInclude<ExtArgs> | null
    /**
     * Filter, which checkins to fetch.
     */
    where?: checkinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of checkins to fetch.
     */
    orderBy?: checkinsOrderByWithRelationInput | checkinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for checkins.
     */
    cursor?: checkinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` checkins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of checkins.
     */
    distinct?: CheckinsScalarFieldEnum | CheckinsScalarFieldEnum[]
  }

  /**
   * checkins findMany
   */
  export type checkinsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkins
     */
    select?: checkinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkins
     */
    omit?: checkinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkinsInclude<ExtArgs> | null
    /**
     * Filter, which checkins to fetch.
     */
    where?: checkinsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of checkins to fetch.
     */
    orderBy?: checkinsOrderByWithRelationInput | checkinsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing checkins.
     */
    cursor?: checkinsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` checkins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` checkins.
     */
    skip?: number
    distinct?: CheckinsScalarFieldEnum | CheckinsScalarFieldEnum[]
  }

  /**
   * checkins create
   */
  export type checkinsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkins
     */
    select?: checkinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkins
     */
    omit?: checkinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkinsInclude<ExtArgs> | null
    /**
     * The data needed to create a checkins.
     */
    data: XOR<checkinsCreateInput, checkinsUncheckedCreateInput>
  }

  /**
   * checkins createMany
   */
  export type checkinsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many checkins.
     */
    data: checkinsCreateManyInput | checkinsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * checkins createManyAndReturn
   */
  export type checkinsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkins
     */
    select?: checkinsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the checkins
     */
    omit?: checkinsOmit<ExtArgs> | null
    /**
     * The data used to create many checkins.
     */
    data: checkinsCreateManyInput | checkinsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkinsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * checkins update
   */
  export type checkinsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkins
     */
    select?: checkinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkins
     */
    omit?: checkinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkinsInclude<ExtArgs> | null
    /**
     * The data needed to update a checkins.
     */
    data: XOR<checkinsUpdateInput, checkinsUncheckedUpdateInput>
    /**
     * Choose, which checkins to update.
     */
    where: checkinsWhereUniqueInput
  }

  /**
   * checkins updateMany
   */
  export type checkinsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update checkins.
     */
    data: XOR<checkinsUpdateManyMutationInput, checkinsUncheckedUpdateManyInput>
    /**
     * Filter which checkins to update
     */
    where?: checkinsWhereInput
    /**
     * Limit how many checkins to update.
     */
    limit?: number
  }

  /**
   * checkins updateManyAndReturn
   */
  export type checkinsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkins
     */
    select?: checkinsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the checkins
     */
    omit?: checkinsOmit<ExtArgs> | null
    /**
     * The data used to update checkins.
     */
    data: XOR<checkinsUpdateManyMutationInput, checkinsUncheckedUpdateManyInput>
    /**
     * Filter which checkins to update
     */
    where?: checkinsWhereInput
    /**
     * Limit how many checkins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkinsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * checkins upsert
   */
  export type checkinsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkins
     */
    select?: checkinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkins
     */
    omit?: checkinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkinsInclude<ExtArgs> | null
    /**
     * The filter to search for the checkins to update in case it exists.
     */
    where: checkinsWhereUniqueInput
    /**
     * In case the checkins found by the `where` argument doesn't exist, create a new checkins with this data.
     */
    create: XOR<checkinsCreateInput, checkinsUncheckedCreateInput>
    /**
     * In case the checkins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<checkinsUpdateInput, checkinsUncheckedUpdateInput>
  }

  /**
   * checkins delete
   */
  export type checkinsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkins
     */
    select?: checkinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkins
     */
    omit?: checkinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkinsInclude<ExtArgs> | null
    /**
     * Filter which checkins to delete.
     */
    where: checkinsWhereUniqueInput
  }

  /**
   * checkins deleteMany
   */
  export type checkinsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which checkins to delete
     */
    where?: checkinsWhereInput
    /**
     * Limit how many checkins to delete.
     */
    limit?: number
  }

  /**
   * checkins without action
   */
  export type checkinsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkins
     */
    select?: checkinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkins
     */
    omit?: checkinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkinsInclude<ExtArgs> | null
  }


  /**
   * Model citas
   */

  export type AggregateCitas = {
    _count: CitasCountAggregateOutputType | null
    _avg: CitasAvgAggregateOutputType | null
    _sum: CitasSumAggregateOutputType | null
    _min: CitasMinAggregateOutputType | null
    _max: CitasMaxAggregateOutputType | null
  }

  export type CitasAvgAggregateOutputType = {
    duracion_minutos: number | null
  }

  export type CitasSumAggregateOutputType = {
    duracion_minutos: number | null
  }

  export type CitasMinAggregateOutputType = {
    id: string | null
    empleado_id: string | null
    psicologo_id: string | null
    fecha_hora: Date | null
    duracion_minutos: number | null
    estado: string | null
    notas: string | null
    link_reunion: string | null
    creado_en: Date | null
  }

  export type CitasMaxAggregateOutputType = {
    id: string | null
    empleado_id: string | null
    psicologo_id: string | null
    fecha_hora: Date | null
    duracion_minutos: number | null
    estado: string | null
    notas: string | null
    link_reunion: string | null
    creado_en: Date | null
  }

  export type CitasCountAggregateOutputType = {
    id: number
    empleado_id: number
    psicologo_id: number
    fecha_hora: number
    duracion_minutos: number
    estado: number
    notas: number
    link_reunion: number
    creado_en: number
    _all: number
  }


  export type CitasAvgAggregateInputType = {
    duracion_minutos?: true
  }

  export type CitasSumAggregateInputType = {
    duracion_minutos?: true
  }

  export type CitasMinAggregateInputType = {
    id?: true
    empleado_id?: true
    psicologo_id?: true
    fecha_hora?: true
    duracion_minutos?: true
    estado?: true
    notas?: true
    link_reunion?: true
    creado_en?: true
  }

  export type CitasMaxAggregateInputType = {
    id?: true
    empleado_id?: true
    psicologo_id?: true
    fecha_hora?: true
    duracion_minutos?: true
    estado?: true
    notas?: true
    link_reunion?: true
    creado_en?: true
  }

  export type CitasCountAggregateInputType = {
    id?: true
    empleado_id?: true
    psicologo_id?: true
    fecha_hora?: true
    duracion_minutos?: true
    estado?: true
    notas?: true
    link_reunion?: true
    creado_en?: true
    _all?: true
  }

  export type CitasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which citas to aggregate.
     */
    where?: citasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of citas to fetch.
     */
    orderBy?: citasOrderByWithRelationInput | citasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: citasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned citas
    **/
    _count?: true | CitasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CitasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitasMaxAggregateInputType
  }

  export type GetCitasAggregateType<T extends CitasAggregateArgs> = {
        [P in keyof T & keyof AggregateCitas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCitas[P]>
      : GetScalarType<T[P], AggregateCitas[P]>
  }




  export type citasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: citasWhereInput
    orderBy?: citasOrderByWithAggregationInput | citasOrderByWithAggregationInput[]
    by: CitasScalarFieldEnum[] | CitasScalarFieldEnum
    having?: citasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitasCountAggregateInputType | true
    _avg?: CitasAvgAggregateInputType
    _sum?: CitasSumAggregateInputType
    _min?: CitasMinAggregateInputType
    _max?: CitasMaxAggregateInputType
  }

  export type CitasGroupByOutputType = {
    id: string
    empleado_id: string
    psicologo_id: string
    fecha_hora: Date
    duracion_minutos: number | null
    estado: string | null
    notas: string | null
    link_reunion: string | null
    creado_en: Date | null
    _count: CitasCountAggregateOutputType | null
    _avg: CitasAvgAggregateOutputType | null
    _sum: CitasSumAggregateOutputType | null
    _min: CitasMinAggregateOutputType | null
    _max: CitasMaxAggregateOutputType | null
  }

  type GetCitasGroupByPayload<T extends citasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitasGroupByOutputType[P]>
            : GetScalarType<T[P], CitasGroupByOutputType[P]>
        }
      >
    >


  export type citasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleado_id?: boolean
    psicologo_id?: boolean
    fecha_hora?: boolean
    duracion_minutos?: boolean
    estado?: boolean
    notas?: boolean
    link_reunion?: boolean
    creado_en?: boolean
    usuarios_citas_empleado_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    usuarios_citas_psicologo_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    valoraciones?: boolean | citas$valoracionesArgs<ExtArgs>
    _count?: boolean | CitasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["citas"]>

  export type citasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleado_id?: boolean
    psicologo_id?: boolean
    fecha_hora?: boolean
    duracion_minutos?: boolean
    estado?: boolean
    notas?: boolean
    link_reunion?: boolean
    creado_en?: boolean
    usuarios_citas_empleado_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    usuarios_citas_psicologo_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["citas"]>

  export type citasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleado_id?: boolean
    psicologo_id?: boolean
    fecha_hora?: boolean
    duracion_minutos?: boolean
    estado?: boolean
    notas?: boolean
    link_reunion?: boolean
    creado_en?: boolean
    usuarios_citas_empleado_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    usuarios_citas_psicologo_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["citas"]>

  export type citasSelectScalar = {
    id?: boolean
    empleado_id?: boolean
    psicologo_id?: boolean
    fecha_hora?: boolean
    duracion_minutos?: boolean
    estado?: boolean
    notas?: boolean
    link_reunion?: boolean
    creado_en?: boolean
  }

  export type citasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "empleado_id" | "psicologo_id" | "fecha_hora" | "duracion_minutos" | "estado" | "notas" | "link_reunion" | "creado_en", ExtArgs["result"]["citas"]>
  export type citasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_citas_empleado_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    usuarios_citas_psicologo_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    valoraciones?: boolean | citas$valoracionesArgs<ExtArgs>
    _count?: boolean | CitasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type citasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_citas_empleado_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    usuarios_citas_psicologo_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type citasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_citas_empleado_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    usuarios_citas_psicologo_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $citasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "citas"
    objects: {
      usuarios_citas_empleado_idTousuarios: Prisma.$usuariosPayload<ExtArgs>
      usuarios_citas_psicologo_idTousuarios: Prisma.$usuariosPayload<ExtArgs>
      valoraciones: Prisma.$valoracionesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      empleado_id: string
      psicologo_id: string
      fecha_hora: Date
      duracion_minutos: number | null
      estado: string | null
      notas: string | null
      link_reunion: string | null
      creado_en: Date | null
    }, ExtArgs["result"]["citas"]>
    composites: {}
  }

  type citasGetPayload<S extends boolean | null | undefined | citasDefaultArgs> = $Result.GetResult<Prisma.$citasPayload, S>

  type citasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<citasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CitasCountAggregateInputType | true
    }

  export interface citasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['citas'], meta: { name: 'citas' } }
    /**
     * Find zero or one Citas that matches the filter.
     * @param {citasFindUniqueArgs} args - Arguments to find a Citas
     * @example
     * // Get one Citas
     * const citas = await prisma.citas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends citasFindUniqueArgs>(args: SelectSubset<T, citasFindUniqueArgs<ExtArgs>>): Prisma__citasClient<$Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Citas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {citasFindUniqueOrThrowArgs} args - Arguments to find a Citas
     * @example
     * // Get one Citas
     * const citas = await prisma.citas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends citasFindUniqueOrThrowArgs>(args: SelectSubset<T, citasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__citasClient<$Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Citas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citasFindFirstArgs} args - Arguments to find a Citas
     * @example
     * // Get one Citas
     * const citas = await prisma.citas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends citasFindFirstArgs>(args?: SelectSubset<T, citasFindFirstArgs<ExtArgs>>): Prisma__citasClient<$Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Citas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citasFindFirstOrThrowArgs} args - Arguments to find a Citas
     * @example
     * // Get one Citas
     * const citas = await prisma.citas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends citasFindFirstOrThrowArgs>(args?: SelectSubset<T, citasFindFirstOrThrowArgs<ExtArgs>>): Prisma__citasClient<$Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Citas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Citas
     * const citas = await prisma.citas.findMany()
     * 
     * // Get first 10 Citas
     * const citas = await prisma.citas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const citasWithIdOnly = await prisma.citas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends citasFindManyArgs>(args?: SelectSubset<T, citasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Citas.
     * @param {citasCreateArgs} args - Arguments to create a Citas.
     * @example
     * // Create one Citas
     * const Citas = await prisma.citas.create({
     *   data: {
     *     // ... data to create a Citas
     *   }
     * })
     * 
     */
    create<T extends citasCreateArgs>(args: SelectSubset<T, citasCreateArgs<ExtArgs>>): Prisma__citasClient<$Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Citas.
     * @param {citasCreateManyArgs} args - Arguments to create many Citas.
     * @example
     * // Create many Citas
     * const citas = await prisma.citas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends citasCreateManyArgs>(args?: SelectSubset<T, citasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Citas and returns the data saved in the database.
     * @param {citasCreateManyAndReturnArgs} args - Arguments to create many Citas.
     * @example
     * // Create many Citas
     * const citas = await prisma.citas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Citas and only return the `id`
     * const citasWithIdOnly = await prisma.citas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends citasCreateManyAndReturnArgs>(args?: SelectSubset<T, citasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Citas.
     * @param {citasDeleteArgs} args - Arguments to delete one Citas.
     * @example
     * // Delete one Citas
     * const Citas = await prisma.citas.delete({
     *   where: {
     *     // ... filter to delete one Citas
     *   }
     * })
     * 
     */
    delete<T extends citasDeleteArgs>(args: SelectSubset<T, citasDeleteArgs<ExtArgs>>): Prisma__citasClient<$Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Citas.
     * @param {citasUpdateArgs} args - Arguments to update one Citas.
     * @example
     * // Update one Citas
     * const citas = await prisma.citas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends citasUpdateArgs>(args: SelectSubset<T, citasUpdateArgs<ExtArgs>>): Prisma__citasClient<$Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Citas.
     * @param {citasDeleteManyArgs} args - Arguments to filter Citas to delete.
     * @example
     * // Delete a few Citas
     * const { count } = await prisma.citas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends citasDeleteManyArgs>(args?: SelectSubset<T, citasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Citas
     * const citas = await prisma.citas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends citasUpdateManyArgs>(args: SelectSubset<T, citasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Citas and returns the data updated in the database.
     * @param {citasUpdateManyAndReturnArgs} args - Arguments to update many Citas.
     * @example
     * // Update many Citas
     * const citas = await prisma.citas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Citas and only return the `id`
     * const citasWithIdOnly = await prisma.citas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends citasUpdateManyAndReturnArgs>(args: SelectSubset<T, citasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Citas.
     * @param {citasUpsertArgs} args - Arguments to update or create a Citas.
     * @example
     * // Update or create a Citas
     * const citas = await prisma.citas.upsert({
     *   create: {
     *     // ... data to create a Citas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Citas we want to update
     *   }
     * })
     */
    upsert<T extends citasUpsertArgs>(args: SelectSubset<T, citasUpsertArgs<ExtArgs>>): Prisma__citasClient<$Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citasCountArgs} args - Arguments to filter Citas to count.
     * @example
     * // Count the number of Citas
     * const count = await prisma.citas.count({
     *   where: {
     *     // ... the filter for the Citas we want to count
     *   }
     * })
    **/
    count<T extends citasCountArgs>(
      args?: Subset<T, citasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CitasAggregateArgs>(args: Subset<T, CitasAggregateArgs>): Prisma.PrismaPromise<GetCitasAggregateType<T>>

    /**
     * Group by Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends citasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: citasGroupByArgs['orderBy'] }
        : { orderBy?: citasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, citasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the citas model
   */
  readonly fields: citasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for citas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__citasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios_citas_empleado_idTousuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuarios_citas_psicologo_idTousuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    valoraciones<T extends citas$valoracionesArgs<ExtArgs> = {}>(args?: Subset<T, citas$valoracionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$valoracionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the citas model
   */
  interface citasFieldRefs {
    readonly id: FieldRef<"citas", 'String'>
    readonly empleado_id: FieldRef<"citas", 'String'>
    readonly psicologo_id: FieldRef<"citas", 'String'>
    readonly fecha_hora: FieldRef<"citas", 'DateTime'>
    readonly duracion_minutos: FieldRef<"citas", 'Int'>
    readonly estado: FieldRef<"citas", 'String'>
    readonly notas: FieldRef<"citas", 'String'>
    readonly link_reunion: FieldRef<"citas", 'String'>
    readonly creado_en: FieldRef<"citas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * citas findUnique
   */
  export type citasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citas
     */
    select?: citasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the citas
     */
    omit?: citasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citasInclude<ExtArgs> | null
    /**
     * Filter, which citas to fetch.
     */
    where: citasWhereUniqueInput
  }

  /**
   * citas findUniqueOrThrow
   */
  export type citasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citas
     */
    select?: citasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the citas
     */
    omit?: citasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citasInclude<ExtArgs> | null
    /**
     * Filter, which citas to fetch.
     */
    where: citasWhereUniqueInput
  }

  /**
   * citas findFirst
   */
  export type citasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citas
     */
    select?: citasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the citas
     */
    omit?: citasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citasInclude<ExtArgs> | null
    /**
     * Filter, which citas to fetch.
     */
    where?: citasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of citas to fetch.
     */
    orderBy?: citasOrderByWithRelationInput | citasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for citas.
     */
    cursor?: citasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of citas.
     */
    distinct?: CitasScalarFieldEnum | CitasScalarFieldEnum[]
  }

  /**
   * citas findFirstOrThrow
   */
  export type citasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citas
     */
    select?: citasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the citas
     */
    omit?: citasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citasInclude<ExtArgs> | null
    /**
     * Filter, which citas to fetch.
     */
    where?: citasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of citas to fetch.
     */
    orderBy?: citasOrderByWithRelationInput | citasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for citas.
     */
    cursor?: citasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of citas.
     */
    distinct?: CitasScalarFieldEnum | CitasScalarFieldEnum[]
  }

  /**
   * citas findMany
   */
  export type citasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citas
     */
    select?: citasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the citas
     */
    omit?: citasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citasInclude<ExtArgs> | null
    /**
     * Filter, which citas to fetch.
     */
    where?: citasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of citas to fetch.
     */
    orderBy?: citasOrderByWithRelationInput | citasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing citas.
     */
    cursor?: citasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` citas.
     */
    skip?: number
    distinct?: CitasScalarFieldEnum | CitasScalarFieldEnum[]
  }

  /**
   * citas create
   */
  export type citasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citas
     */
    select?: citasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the citas
     */
    omit?: citasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citasInclude<ExtArgs> | null
    /**
     * The data needed to create a citas.
     */
    data: XOR<citasCreateInput, citasUncheckedCreateInput>
  }

  /**
   * citas createMany
   */
  export type citasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many citas.
     */
    data: citasCreateManyInput | citasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * citas createManyAndReturn
   */
  export type citasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citas
     */
    select?: citasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the citas
     */
    omit?: citasOmit<ExtArgs> | null
    /**
     * The data used to create many citas.
     */
    data: citasCreateManyInput | citasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * citas update
   */
  export type citasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citas
     */
    select?: citasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the citas
     */
    omit?: citasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citasInclude<ExtArgs> | null
    /**
     * The data needed to update a citas.
     */
    data: XOR<citasUpdateInput, citasUncheckedUpdateInput>
    /**
     * Choose, which citas to update.
     */
    where: citasWhereUniqueInput
  }

  /**
   * citas updateMany
   */
  export type citasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update citas.
     */
    data: XOR<citasUpdateManyMutationInput, citasUncheckedUpdateManyInput>
    /**
     * Filter which citas to update
     */
    where?: citasWhereInput
    /**
     * Limit how many citas to update.
     */
    limit?: number
  }

  /**
   * citas updateManyAndReturn
   */
  export type citasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citas
     */
    select?: citasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the citas
     */
    omit?: citasOmit<ExtArgs> | null
    /**
     * The data used to update citas.
     */
    data: XOR<citasUpdateManyMutationInput, citasUncheckedUpdateManyInput>
    /**
     * Filter which citas to update
     */
    where?: citasWhereInput
    /**
     * Limit how many citas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * citas upsert
   */
  export type citasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citas
     */
    select?: citasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the citas
     */
    omit?: citasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citasInclude<ExtArgs> | null
    /**
     * The filter to search for the citas to update in case it exists.
     */
    where: citasWhereUniqueInput
    /**
     * In case the citas found by the `where` argument doesn't exist, create a new citas with this data.
     */
    create: XOR<citasCreateInput, citasUncheckedCreateInput>
    /**
     * In case the citas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<citasUpdateInput, citasUncheckedUpdateInput>
  }

  /**
   * citas delete
   */
  export type citasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citas
     */
    select?: citasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the citas
     */
    omit?: citasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citasInclude<ExtArgs> | null
    /**
     * Filter which citas to delete.
     */
    where: citasWhereUniqueInput
  }

  /**
   * citas deleteMany
   */
  export type citasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which citas to delete
     */
    where?: citasWhereInput
    /**
     * Limit how many citas to delete.
     */
    limit?: number
  }

  /**
   * citas.valoraciones
   */
  export type citas$valoracionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valoraciones
     */
    select?: valoracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the valoraciones
     */
    omit?: valoracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valoracionesInclude<ExtArgs> | null
    where?: valoracionesWhereInput
    orderBy?: valoracionesOrderByWithRelationInput | valoracionesOrderByWithRelationInput[]
    cursor?: valoracionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ValoracionesScalarFieldEnum | ValoracionesScalarFieldEnum[]
  }

  /**
   * citas without action
   */
  export type citasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citas
     */
    select?: citasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the citas
     */
    omit?: citasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citasInclude<ExtArgs> | null
  }


  /**
   * Model mensajes
   */

  export type AggregateMensajes = {
    _count: MensajesCountAggregateOutputType | null
    _min: MensajesMinAggregateOutputType | null
    _max: MensajesMaxAggregateOutputType | null
  }

  export type MensajesMinAggregateOutputType = {
    id: string | null
    remitente_id: string | null
    destinatario_id: string | null
    contenido: string | null
    leido: boolean | null
    creado_en: Date | null
  }

  export type MensajesMaxAggregateOutputType = {
    id: string | null
    remitente_id: string | null
    destinatario_id: string | null
    contenido: string | null
    leido: boolean | null
    creado_en: Date | null
  }

  export type MensajesCountAggregateOutputType = {
    id: number
    remitente_id: number
    destinatario_id: number
    contenido: number
    leido: number
    creado_en: number
    _all: number
  }


  export type MensajesMinAggregateInputType = {
    id?: true
    remitente_id?: true
    destinatario_id?: true
    contenido?: true
    leido?: true
    creado_en?: true
  }

  export type MensajesMaxAggregateInputType = {
    id?: true
    remitente_id?: true
    destinatario_id?: true
    contenido?: true
    leido?: true
    creado_en?: true
  }

  export type MensajesCountAggregateInputType = {
    id?: true
    remitente_id?: true
    destinatario_id?: true
    contenido?: true
    leido?: true
    creado_en?: true
    _all?: true
  }

  export type MensajesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mensajes to aggregate.
     */
    where?: mensajesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensajes to fetch.
     */
    orderBy?: mensajesOrderByWithRelationInput | mensajesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mensajesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mensajes
    **/
    _count?: true | MensajesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensajesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensajesMaxAggregateInputType
  }

  export type GetMensajesAggregateType<T extends MensajesAggregateArgs> = {
        [P in keyof T & keyof AggregateMensajes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensajes[P]>
      : GetScalarType<T[P], AggregateMensajes[P]>
  }




  export type mensajesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mensajesWhereInput
    orderBy?: mensajesOrderByWithAggregationInput | mensajesOrderByWithAggregationInput[]
    by: MensajesScalarFieldEnum[] | MensajesScalarFieldEnum
    having?: mensajesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensajesCountAggregateInputType | true
    _min?: MensajesMinAggregateInputType
    _max?: MensajesMaxAggregateInputType
  }

  export type MensajesGroupByOutputType = {
    id: string
    remitente_id: string
    destinatario_id: string
    contenido: string
    leido: boolean | null
    creado_en: Date | null
    _count: MensajesCountAggregateOutputType | null
    _min: MensajesMinAggregateOutputType | null
    _max: MensajesMaxAggregateOutputType | null
  }

  type GetMensajesGroupByPayload<T extends mensajesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensajesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensajesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensajesGroupByOutputType[P]>
            : GetScalarType<T[P], MensajesGroupByOutputType[P]>
        }
      >
    >


  export type mensajesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    remitente_id?: boolean
    destinatario_id?: boolean
    contenido?: boolean
    leido?: boolean
    creado_en?: boolean
    usuarios_mensajes_destinatario_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    usuarios_mensajes_remitente_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensajes"]>

  export type mensajesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    remitente_id?: boolean
    destinatario_id?: boolean
    contenido?: boolean
    leido?: boolean
    creado_en?: boolean
    usuarios_mensajes_destinatario_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    usuarios_mensajes_remitente_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensajes"]>

  export type mensajesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    remitente_id?: boolean
    destinatario_id?: boolean
    contenido?: boolean
    leido?: boolean
    creado_en?: boolean
    usuarios_mensajes_destinatario_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    usuarios_mensajes_remitente_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensajes"]>

  export type mensajesSelectScalar = {
    id?: boolean
    remitente_id?: boolean
    destinatario_id?: boolean
    contenido?: boolean
    leido?: boolean
    creado_en?: boolean
  }

  export type mensajesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "remitente_id" | "destinatario_id" | "contenido" | "leido" | "creado_en", ExtArgs["result"]["mensajes"]>
  export type mensajesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_mensajes_destinatario_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    usuarios_mensajes_remitente_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type mensajesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_mensajes_destinatario_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    usuarios_mensajes_remitente_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type mensajesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios_mensajes_destinatario_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    usuarios_mensajes_remitente_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $mensajesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mensajes"
    objects: {
      usuarios_mensajes_destinatario_idTousuarios: Prisma.$usuariosPayload<ExtArgs>
      usuarios_mensajes_remitente_idTousuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      remitente_id: string
      destinatario_id: string
      contenido: string
      leido: boolean | null
      creado_en: Date | null
    }, ExtArgs["result"]["mensajes"]>
    composites: {}
  }

  type mensajesGetPayload<S extends boolean | null | undefined | mensajesDefaultArgs> = $Result.GetResult<Prisma.$mensajesPayload, S>

  type mensajesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mensajesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensajesCountAggregateInputType | true
    }

  export interface mensajesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mensajes'], meta: { name: 'mensajes' } }
    /**
     * Find zero or one Mensajes that matches the filter.
     * @param {mensajesFindUniqueArgs} args - Arguments to find a Mensajes
     * @example
     * // Get one Mensajes
     * const mensajes = await prisma.mensajes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mensajesFindUniqueArgs>(args: SelectSubset<T, mensajesFindUniqueArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mensajes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mensajesFindUniqueOrThrowArgs} args - Arguments to find a Mensajes
     * @example
     * // Get one Mensajes
     * const mensajes = await prisma.mensajes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mensajesFindUniqueOrThrowArgs>(args: SelectSubset<T, mensajesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajesFindFirstArgs} args - Arguments to find a Mensajes
     * @example
     * // Get one Mensajes
     * const mensajes = await prisma.mensajes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mensajesFindFirstArgs>(args?: SelectSubset<T, mensajesFindFirstArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensajes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajesFindFirstOrThrowArgs} args - Arguments to find a Mensajes
     * @example
     * // Get one Mensajes
     * const mensajes = await prisma.mensajes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mensajesFindFirstOrThrowArgs>(args?: SelectSubset<T, mensajesFindFirstOrThrowArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mensajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensajes
     * const mensajes = await prisma.mensajes.findMany()
     * 
     * // Get first 10 Mensajes
     * const mensajes = await prisma.mensajes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensajesWithIdOnly = await prisma.mensajes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mensajesFindManyArgs>(args?: SelectSubset<T, mensajesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mensajes.
     * @param {mensajesCreateArgs} args - Arguments to create a Mensajes.
     * @example
     * // Create one Mensajes
     * const Mensajes = await prisma.mensajes.create({
     *   data: {
     *     // ... data to create a Mensajes
     *   }
     * })
     * 
     */
    create<T extends mensajesCreateArgs>(args: SelectSubset<T, mensajesCreateArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mensajes.
     * @param {mensajesCreateManyArgs} args - Arguments to create many Mensajes.
     * @example
     * // Create many Mensajes
     * const mensajes = await prisma.mensajes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mensajesCreateManyArgs>(args?: SelectSubset<T, mensajesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mensajes and returns the data saved in the database.
     * @param {mensajesCreateManyAndReturnArgs} args - Arguments to create many Mensajes.
     * @example
     * // Create many Mensajes
     * const mensajes = await prisma.mensajes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mensajes and only return the `id`
     * const mensajesWithIdOnly = await prisma.mensajes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mensajesCreateManyAndReturnArgs>(args?: SelectSubset<T, mensajesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mensajes.
     * @param {mensajesDeleteArgs} args - Arguments to delete one Mensajes.
     * @example
     * // Delete one Mensajes
     * const Mensajes = await prisma.mensajes.delete({
     *   where: {
     *     // ... filter to delete one Mensajes
     *   }
     * })
     * 
     */
    delete<T extends mensajesDeleteArgs>(args: SelectSubset<T, mensajesDeleteArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mensajes.
     * @param {mensajesUpdateArgs} args - Arguments to update one Mensajes.
     * @example
     * // Update one Mensajes
     * const mensajes = await prisma.mensajes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mensajesUpdateArgs>(args: SelectSubset<T, mensajesUpdateArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mensajes.
     * @param {mensajesDeleteManyArgs} args - Arguments to filter Mensajes to delete.
     * @example
     * // Delete a few Mensajes
     * const { count } = await prisma.mensajes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mensajesDeleteManyArgs>(args?: SelectSubset<T, mensajesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensajes
     * const mensajes = await prisma.mensajes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mensajesUpdateManyArgs>(args: SelectSubset<T, mensajesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensajes and returns the data updated in the database.
     * @param {mensajesUpdateManyAndReturnArgs} args - Arguments to update many Mensajes.
     * @example
     * // Update many Mensajes
     * const mensajes = await prisma.mensajes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mensajes and only return the `id`
     * const mensajesWithIdOnly = await prisma.mensajes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mensajesUpdateManyAndReturnArgs>(args: SelectSubset<T, mensajesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mensajes.
     * @param {mensajesUpsertArgs} args - Arguments to update or create a Mensajes.
     * @example
     * // Update or create a Mensajes
     * const mensajes = await prisma.mensajes.upsert({
     *   create: {
     *     // ... data to create a Mensajes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensajes we want to update
     *   }
     * })
     */
    upsert<T extends mensajesUpsertArgs>(args: SelectSubset<T, mensajesUpsertArgs<ExtArgs>>): Prisma__mensajesClient<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajesCountArgs} args - Arguments to filter Mensajes to count.
     * @example
     * // Count the number of Mensajes
     * const count = await prisma.mensajes.count({
     *   where: {
     *     // ... the filter for the Mensajes we want to count
     *   }
     * })
    **/
    count<T extends mensajesCountArgs>(
      args?: Subset<T, mensajesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensajesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MensajesAggregateArgs>(args: Subset<T, MensajesAggregateArgs>): Prisma.PrismaPromise<GetMensajesAggregateType<T>>

    /**
     * Group by Mensajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mensajesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mensajesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mensajesGroupByArgs['orderBy'] }
        : { orderBy?: mensajesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mensajesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensajesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mensajes model
   */
  readonly fields: mensajesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mensajes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mensajesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios_mensajes_destinatario_idTousuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuarios_mensajes_remitente_idTousuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mensajes model
   */
  interface mensajesFieldRefs {
    readonly id: FieldRef<"mensajes", 'String'>
    readonly remitente_id: FieldRef<"mensajes", 'String'>
    readonly destinatario_id: FieldRef<"mensajes", 'String'>
    readonly contenido: FieldRef<"mensajes", 'String'>
    readonly leido: FieldRef<"mensajes", 'Boolean'>
    readonly creado_en: FieldRef<"mensajes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * mensajes findUnique
   */
  export type mensajesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * Filter, which mensajes to fetch.
     */
    where: mensajesWhereUniqueInput
  }

  /**
   * mensajes findUniqueOrThrow
   */
  export type mensajesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * Filter, which mensajes to fetch.
     */
    where: mensajesWhereUniqueInput
  }

  /**
   * mensajes findFirst
   */
  export type mensajesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * Filter, which mensajes to fetch.
     */
    where?: mensajesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensajes to fetch.
     */
    orderBy?: mensajesOrderByWithRelationInput | mensajesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mensajes.
     */
    cursor?: mensajesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mensajes.
     */
    distinct?: MensajesScalarFieldEnum | MensajesScalarFieldEnum[]
  }

  /**
   * mensajes findFirstOrThrow
   */
  export type mensajesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * Filter, which mensajes to fetch.
     */
    where?: mensajesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensajes to fetch.
     */
    orderBy?: mensajesOrderByWithRelationInput | mensajesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mensajes.
     */
    cursor?: mensajesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mensajes.
     */
    distinct?: MensajesScalarFieldEnum | MensajesScalarFieldEnum[]
  }

  /**
   * mensajes findMany
   */
  export type mensajesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * Filter, which mensajes to fetch.
     */
    where?: mensajesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mensajes to fetch.
     */
    orderBy?: mensajesOrderByWithRelationInput | mensajesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mensajes.
     */
    cursor?: mensajesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mensajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mensajes.
     */
    skip?: number
    distinct?: MensajesScalarFieldEnum | MensajesScalarFieldEnum[]
  }

  /**
   * mensajes create
   */
  export type mensajesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * The data needed to create a mensajes.
     */
    data: XOR<mensajesCreateInput, mensajesUncheckedCreateInput>
  }

  /**
   * mensajes createMany
   */
  export type mensajesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mensajes.
     */
    data: mensajesCreateManyInput | mensajesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mensajes createManyAndReturn
   */
  export type mensajesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * The data used to create many mensajes.
     */
    data: mensajesCreateManyInput | mensajesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * mensajes update
   */
  export type mensajesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * The data needed to update a mensajes.
     */
    data: XOR<mensajesUpdateInput, mensajesUncheckedUpdateInput>
    /**
     * Choose, which mensajes to update.
     */
    where: mensajesWhereUniqueInput
  }

  /**
   * mensajes updateMany
   */
  export type mensajesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mensajes.
     */
    data: XOR<mensajesUpdateManyMutationInput, mensajesUncheckedUpdateManyInput>
    /**
     * Filter which mensajes to update
     */
    where?: mensajesWhereInput
    /**
     * Limit how many mensajes to update.
     */
    limit?: number
  }

  /**
   * mensajes updateManyAndReturn
   */
  export type mensajesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * The data used to update mensajes.
     */
    data: XOR<mensajesUpdateManyMutationInput, mensajesUncheckedUpdateManyInput>
    /**
     * Filter which mensajes to update
     */
    where?: mensajesWhereInput
    /**
     * Limit how many mensajes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * mensajes upsert
   */
  export type mensajesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * The filter to search for the mensajes to update in case it exists.
     */
    where: mensajesWhereUniqueInput
    /**
     * In case the mensajes found by the `where` argument doesn't exist, create a new mensajes with this data.
     */
    create: XOR<mensajesCreateInput, mensajesUncheckedCreateInput>
    /**
     * In case the mensajes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mensajesUpdateInput, mensajesUncheckedUpdateInput>
  }

  /**
   * mensajes delete
   */
  export type mensajesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    /**
     * Filter which mensajes to delete.
     */
    where: mensajesWhereUniqueInput
  }

  /**
   * mensajes deleteMany
   */
  export type mensajesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mensajes to delete
     */
    where?: mensajesWhereInput
    /**
     * Limit how many mensajes to delete.
     */
    limit?: number
  }

  /**
   * mensajes without action
   */
  export type mensajesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
  }


  /**
   * Model psicologos
   */

  export type AggregatePsicologos = {
    _count: PsicologosCountAggregateOutputType | null
    _avg: PsicologosAvgAggregateOutputType | null
    _sum: PsicologosSumAggregateOutputType | null
    _min: PsicologosMinAggregateOutputType | null
    _max: PsicologosMaxAggregateOutputType | null
  }

  export type PsicologosAvgAggregateOutputType = {
    a_os_experiencia: number | null
  }

  export type PsicologosSumAggregateOutputType = {
    a_os_experiencia: number | null
  }

  export type PsicologosMinAggregateOutputType = {
    id: string | null
    numero_licencia: string | null
    especialidad: string | null
    a_os_experiencia: number | null
    biografia: string | null
  }

  export type PsicologosMaxAggregateOutputType = {
    id: string | null
    numero_licencia: string | null
    especialidad: string | null
    a_os_experiencia: number | null
    biografia: string | null
  }

  export type PsicologosCountAggregateOutputType = {
    id: number
    numero_licencia: number
    especialidad: number
    a_os_experiencia: number
    biografia: number
    _all: number
  }


  export type PsicologosAvgAggregateInputType = {
    a_os_experiencia?: true
  }

  export type PsicologosSumAggregateInputType = {
    a_os_experiencia?: true
  }

  export type PsicologosMinAggregateInputType = {
    id?: true
    numero_licencia?: true
    especialidad?: true
    a_os_experiencia?: true
    biografia?: true
  }

  export type PsicologosMaxAggregateInputType = {
    id?: true
    numero_licencia?: true
    especialidad?: true
    a_os_experiencia?: true
    biografia?: true
  }

  export type PsicologosCountAggregateInputType = {
    id?: true
    numero_licencia?: true
    especialidad?: true
    a_os_experiencia?: true
    biografia?: true
    _all?: true
  }

  export type PsicologosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which psicologos to aggregate.
     */
    where?: psicologosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of psicologos to fetch.
     */
    orderBy?: psicologosOrderByWithRelationInput | psicologosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: psicologosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` psicologos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` psicologos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned psicologos
    **/
    _count?: true | PsicologosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PsicologosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PsicologosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PsicologosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PsicologosMaxAggregateInputType
  }

  export type GetPsicologosAggregateType<T extends PsicologosAggregateArgs> = {
        [P in keyof T & keyof AggregatePsicologos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePsicologos[P]>
      : GetScalarType<T[P], AggregatePsicologos[P]>
  }




  export type psicologosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: psicologosWhereInput
    orderBy?: psicologosOrderByWithAggregationInput | psicologosOrderByWithAggregationInput[]
    by: PsicologosScalarFieldEnum[] | PsicologosScalarFieldEnum
    having?: psicologosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PsicologosCountAggregateInputType | true
    _avg?: PsicologosAvgAggregateInputType
    _sum?: PsicologosSumAggregateInputType
    _min?: PsicologosMinAggregateInputType
    _max?: PsicologosMaxAggregateInputType
  }

  export type PsicologosGroupByOutputType = {
    id: string
    numero_licencia: string
    especialidad: string | null
    a_os_experiencia: number | null
    biografia: string | null
    _count: PsicologosCountAggregateOutputType | null
    _avg: PsicologosAvgAggregateOutputType | null
    _sum: PsicologosSumAggregateOutputType | null
    _min: PsicologosMinAggregateOutputType | null
    _max: PsicologosMaxAggregateOutputType | null
  }

  type GetPsicologosGroupByPayload<T extends psicologosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PsicologosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PsicologosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PsicologosGroupByOutputType[P]>
            : GetScalarType<T[P], PsicologosGroupByOutputType[P]>
        }
      >
    >


  export type psicologosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero_licencia?: boolean
    especialidad?: boolean
    a_os_experiencia?: boolean
    biografia?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["psicologos"]>

  export type psicologosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero_licencia?: boolean
    especialidad?: boolean
    a_os_experiencia?: boolean
    biografia?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["psicologos"]>

  export type psicologosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero_licencia?: boolean
    especialidad?: boolean
    a_os_experiencia?: boolean
    biografia?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["psicologos"]>

  export type psicologosSelectScalar = {
    id?: boolean
    numero_licencia?: boolean
    especialidad?: boolean
    a_os_experiencia?: boolean
    biografia?: boolean
  }

  export type psicologosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero_licencia" | "especialidad" | "a_os_experiencia" | "biografia", ExtArgs["result"]["psicologos"]>
  export type psicologosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type psicologosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type psicologosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $psicologosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "psicologos"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numero_licencia: string
      especialidad: string | null
      a_os_experiencia: number | null
      biografia: string | null
    }, ExtArgs["result"]["psicologos"]>
    composites: {}
  }

  type psicologosGetPayload<S extends boolean | null | undefined | psicologosDefaultArgs> = $Result.GetResult<Prisma.$psicologosPayload, S>

  type psicologosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<psicologosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PsicologosCountAggregateInputType | true
    }

  export interface psicologosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['psicologos'], meta: { name: 'psicologos' } }
    /**
     * Find zero or one Psicologos that matches the filter.
     * @param {psicologosFindUniqueArgs} args - Arguments to find a Psicologos
     * @example
     * // Get one Psicologos
     * const psicologos = await prisma.psicologos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends psicologosFindUniqueArgs>(args: SelectSubset<T, psicologosFindUniqueArgs<ExtArgs>>): Prisma__psicologosClient<$Result.GetResult<Prisma.$psicologosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Psicologos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {psicologosFindUniqueOrThrowArgs} args - Arguments to find a Psicologos
     * @example
     * // Get one Psicologos
     * const psicologos = await prisma.psicologos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends psicologosFindUniqueOrThrowArgs>(args: SelectSubset<T, psicologosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__psicologosClient<$Result.GetResult<Prisma.$psicologosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Psicologos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {psicologosFindFirstArgs} args - Arguments to find a Psicologos
     * @example
     * // Get one Psicologos
     * const psicologos = await prisma.psicologos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends psicologosFindFirstArgs>(args?: SelectSubset<T, psicologosFindFirstArgs<ExtArgs>>): Prisma__psicologosClient<$Result.GetResult<Prisma.$psicologosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Psicologos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {psicologosFindFirstOrThrowArgs} args - Arguments to find a Psicologos
     * @example
     * // Get one Psicologos
     * const psicologos = await prisma.psicologos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends psicologosFindFirstOrThrowArgs>(args?: SelectSubset<T, psicologosFindFirstOrThrowArgs<ExtArgs>>): Prisma__psicologosClient<$Result.GetResult<Prisma.$psicologosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Psicologos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {psicologosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Psicologos
     * const psicologos = await prisma.psicologos.findMany()
     * 
     * // Get first 10 Psicologos
     * const psicologos = await prisma.psicologos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const psicologosWithIdOnly = await prisma.psicologos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends psicologosFindManyArgs>(args?: SelectSubset<T, psicologosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$psicologosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Psicologos.
     * @param {psicologosCreateArgs} args - Arguments to create a Psicologos.
     * @example
     * // Create one Psicologos
     * const Psicologos = await prisma.psicologos.create({
     *   data: {
     *     // ... data to create a Psicologos
     *   }
     * })
     * 
     */
    create<T extends psicologosCreateArgs>(args: SelectSubset<T, psicologosCreateArgs<ExtArgs>>): Prisma__psicologosClient<$Result.GetResult<Prisma.$psicologosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Psicologos.
     * @param {psicologosCreateManyArgs} args - Arguments to create many Psicologos.
     * @example
     * // Create many Psicologos
     * const psicologos = await prisma.psicologos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends psicologosCreateManyArgs>(args?: SelectSubset<T, psicologosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Psicologos and returns the data saved in the database.
     * @param {psicologosCreateManyAndReturnArgs} args - Arguments to create many Psicologos.
     * @example
     * // Create many Psicologos
     * const psicologos = await prisma.psicologos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Psicologos and only return the `id`
     * const psicologosWithIdOnly = await prisma.psicologos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends psicologosCreateManyAndReturnArgs>(args?: SelectSubset<T, psicologosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$psicologosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Psicologos.
     * @param {psicologosDeleteArgs} args - Arguments to delete one Psicologos.
     * @example
     * // Delete one Psicologos
     * const Psicologos = await prisma.psicologos.delete({
     *   where: {
     *     // ... filter to delete one Psicologos
     *   }
     * })
     * 
     */
    delete<T extends psicologosDeleteArgs>(args: SelectSubset<T, psicologosDeleteArgs<ExtArgs>>): Prisma__psicologosClient<$Result.GetResult<Prisma.$psicologosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Psicologos.
     * @param {psicologosUpdateArgs} args - Arguments to update one Psicologos.
     * @example
     * // Update one Psicologos
     * const psicologos = await prisma.psicologos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends psicologosUpdateArgs>(args: SelectSubset<T, psicologosUpdateArgs<ExtArgs>>): Prisma__psicologosClient<$Result.GetResult<Prisma.$psicologosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Psicologos.
     * @param {psicologosDeleteManyArgs} args - Arguments to filter Psicologos to delete.
     * @example
     * // Delete a few Psicologos
     * const { count } = await prisma.psicologos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends psicologosDeleteManyArgs>(args?: SelectSubset<T, psicologosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Psicologos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {psicologosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Psicologos
     * const psicologos = await prisma.psicologos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends psicologosUpdateManyArgs>(args: SelectSubset<T, psicologosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Psicologos and returns the data updated in the database.
     * @param {psicologosUpdateManyAndReturnArgs} args - Arguments to update many Psicologos.
     * @example
     * // Update many Psicologos
     * const psicologos = await prisma.psicologos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Psicologos and only return the `id`
     * const psicologosWithIdOnly = await prisma.psicologos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends psicologosUpdateManyAndReturnArgs>(args: SelectSubset<T, psicologosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$psicologosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Psicologos.
     * @param {psicologosUpsertArgs} args - Arguments to update or create a Psicologos.
     * @example
     * // Update or create a Psicologos
     * const psicologos = await prisma.psicologos.upsert({
     *   create: {
     *     // ... data to create a Psicologos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Psicologos we want to update
     *   }
     * })
     */
    upsert<T extends psicologosUpsertArgs>(args: SelectSubset<T, psicologosUpsertArgs<ExtArgs>>): Prisma__psicologosClient<$Result.GetResult<Prisma.$psicologosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Psicologos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {psicologosCountArgs} args - Arguments to filter Psicologos to count.
     * @example
     * // Count the number of Psicologos
     * const count = await prisma.psicologos.count({
     *   where: {
     *     // ... the filter for the Psicologos we want to count
     *   }
     * })
    **/
    count<T extends psicologosCountArgs>(
      args?: Subset<T, psicologosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PsicologosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Psicologos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PsicologosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PsicologosAggregateArgs>(args: Subset<T, PsicologosAggregateArgs>): Prisma.PrismaPromise<GetPsicologosAggregateType<T>>

    /**
     * Group by Psicologos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {psicologosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends psicologosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: psicologosGroupByArgs['orderBy'] }
        : { orderBy?: psicologosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, psicologosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPsicologosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the psicologos model
   */
  readonly fields: psicologosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for psicologos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__psicologosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the psicologos model
   */
  interface psicologosFieldRefs {
    readonly id: FieldRef<"psicologos", 'String'>
    readonly numero_licencia: FieldRef<"psicologos", 'String'>
    readonly especialidad: FieldRef<"psicologos", 'String'>
    readonly a_os_experiencia: FieldRef<"psicologos", 'Int'>
    readonly biografia: FieldRef<"psicologos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * psicologos findUnique
   */
  export type psicologosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psicologos
     */
    select?: psicologosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psicologos
     */
    omit?: psicologosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psicologosInclude<ExtArgs> | null
    /**
     * Filter, which psicologos to fetch.
     */
    where: psicologosWhereUniqueInput
  }

  /**
   * psicologos findUniqueOrThrow
   */
  export type psicologosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psicologos
     */
    select?: psicologosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psicologos
     */
    omit?: psicologosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psicologosInclude<ExtArgs> | null
    /**
     * Filter, which psicologos to fetch.
     */
    where: psicologosWhereUniqueInput
  }

  /**
   * psicologos findFirst
   */
  export type psicologosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psicologos
     */
    select?: psicologosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psicologos
     */
    omit?: psicologosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psicologosInclude<ExtArgs> | null
    /**
     * Filter, which psicologos to fetch.
     */
    where?: psicologosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of psicologos to fetch.
     */
    orderBy?: psicologosOrderByWithRelationInput | psicologosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for psicologos.
     */
    cursor?: psicologosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` psicologos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` psicologos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of psicologos.
     */
    distinct?: PsicologosScalarFieldEnum | PsicologosScalarFieldEnum[]
  }

  /**
   * psicologos findFirstOrThrow
   */
  export type psicologosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psicologos
     */
    select?: psicologosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psicologos
     */
    omit?: psicologosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psicologosInclude<ExtArgs> | null
    /**
     * Filter, which psicologos to fetch.
     */
    where?: psicologosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of psicologos to fetch.
     */
    orderBy?: psicologosOrderByWithRelationInput | psicologosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for psicologos.
     */
    cursor?: psicologosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` psicologos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` psicologos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of psicologos.
     */
    distinct?: PsicologosScalarFieldEnum | PsicologosScalarFieldEnum[]
  }

  /**
   * psicologos findMany
   */
  export type psicologosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psicologos
     */
    select?: psicologosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psicologos
     */
    omit?: psicologosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psicologosInclude<ExtArgs> | null
    /**
     * Filter, which psicologos to fetch.
     */
    where?: psicologosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of psicologos to fetch.
     */
    orderBy?: psicologosOrderByWithRelationInput | psicologosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing psicologos.
     */
    cursor?: psicologosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` psicologos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` psicologos.
     */
    skip?: number
    distinct?: PsicologosScalarFieldEnum | PsicologosScalarFieldEnum[]
  }

  /**
   * psicologos create
   */
  export type psicologosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psicologos
     */
    select?: psicologosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psicologos
     */
    omit?: psicologosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psicologosInclude<ExtArgs> | null
    /**
     * The data needed to create a psicologos.
     */
    data: XOR<psicologosCreateInput, psicologosUncheckedCreateInput>
  }

  /**
   * psicologos createMany
   */
  export type psicologosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many psicologos.
     */
    data: psicologosCreateManyInput | psicologosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * psicologos createManyAndReturn
   */
  export type psicologosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psicologos
     */
    select?: psicologosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the psicologos
     */
    omit?: psicologosOmit<ExtArgs> | null
    /**
     * The data used to create many psicologos.
     */
    data: psicologosCreateManyInput | psicologosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psicologosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * psicologos update
   */
  export type psicologosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psicologos
     */
    select?: psicologosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psicologos
     */
    omit?: psicologosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psicologosInclude<ExtArgs> | null
    /**
     * The data needed to update a psicologos.
     */
    data: XOR<psicologosUpdateInput, psicologosUncheckedUpdateInput>
    /**
     * Choose, which psicologos to update.
     */
    where: psicologosWhereUniqueInput
  }

  /**
   * psicologos updateMany
   */
  export type psicologosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update psicologos.
     */
    data: XOR<psicologosUpdateManyMutationInput, psicologosUncheckedUpdateManyInput>
    /**
     * Filter which psicologos to update
     */
    where?: psicologosWhereInput
    /**
     * Limit how many psicologos to update.
     */
    limit?: number
  }

  /**
   * psicologos updateManyAndReturn
   */
  export type psicologosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psicologos
     */
    select?: psicologosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the psicologos
     */
    omit?: psicologosOmit<ExtArgs> | null
    /**
     * The data used to update psicologos.
     */
    data: XOR<psicologosUpdateManyMutationInput, psicologosUncheckedUpdateManyInput>
    /**
     * Filter which psicologos to update
     */
    where?: psicologosWhereInput
    /**
     * Limit how many psicologos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psicologosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * psicologos upsert
   */
  export type psicologosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psicologos
     */
    select?: psicologosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psicologos
     */
    omit?: psicologosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psicologosInclude<ExtArgs> | null
    /**
     * The filter to search for the psicologos to update in case it exists.
     */
    where: psicologosWhereUniqueInput
    /**
     * In case the psicologos found by the `where` argument doesn't exist, create a new psicologos with this data.
     */
    create: XOR<psicologosCreateInput, psicologosUncheckedCreateInput>
    /**
     * In case the psicologos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<psicologosUpdateInput, psicologosUncheckedUpdateInput>
  }

  /**
   * psicologos delete
   */
  export type psicologosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psicologos
     */
    select?: psicologosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psicologos
     */
    omit?: psicologosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psicologosInclude<ExtArgs> | null
    /**
     * Filter which psicologos to delete.
     */
    where: psicologosWhereUniqueInput
  }

  /**
   * psicologos deleteMany
   */
  export type psicologosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which psicologos to delete
     */
    where?: psicologosWhereInput
    /**
     * Limit how many psicologos to delete.
     */
    limit?: number
  }

  /**
   * psicologos without action
   */
  export type psicologosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psicologos
     */
    select?: psicologosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psicologos
     */
    omit?: psicologosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psicologosInclude<ExtArgs> | null
  }


  /**
   * Model recomendaciones
   */

  export type AggregateRecomendaciones = {
    _count: RecomendacionesCountAggregateOutputType | null
    _min: RecomendacionesMinAggregateOutputType | null
    _max: RecomendacionesMaxAggregateOutputType | null
  }

  export type RecomendacionesMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descripcion: string | null
    tipo: string | null
    url: string | null
    activo: boolean | null
    creado_en: Date | null
  }

  export type RecomendacionesMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descripcion: string | null
    tipo: string | null
    url: string | null
    activo: boolean | null
    creado_en: Date | null
  }

  export type RecomendacionesCountAggregateOutputType = {
    id: number
    titulo: number
    descripcion: number
    tipo: number
    url: number
    activo: number
    creado_en: number
    _all: number
  }


  export type RecomendacionesMinAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    tipo?: true
    url?: true
    activo?: true
    creado_en?: true
  }

  export type RecomendacionesMaxAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    tipo?: true
    url?: true
    activo?: true
    creado_en?: true
  }

  export type RecomendacionesCountAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    tipo?: true
    url?: true
    activo?: true
    creado_en?: true
    _all?: true
  }

  export type RecomendacionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recomendaciones to aggregate.
     */
    where?: recomendacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recomendaciones to fetch.
     */
    orderBy?: recomendacionesOrderByWithRelationInput | recomendacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recomendacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recomendaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recomendaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recomendaciones
    **/
    _count?: true | RecomendacionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecomendacionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecomendacionesMaxAggregateInputType
  }

  export type GetRecomendacionesAggregateType<T extends RecomendacionesAggregateArgs> = {
        [P in keyof T & keyof AggregateRecomendaciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecomendaciones[P]>
      : GetScalarType<T[P], AggregateRecomendaciones[P]>
  }




  export type recomendacionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recomendacionesWhereInput
    orderBy?: recomendacionesOrderByWithAggregationInput | recomendacionesOrderByWithAggregationInput[]
    by: RecomendacionesScalarFieldEnum[] | RecomendacionesScalarFieldEnum
    having?: recomendacionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecomendacionesCountAggregateInputType | true
    _min?: RecomendacionesMinAggregateInputType
    _max?: RecomendacionesMaxAggregateInputType
  }

  export type RecomendacionesGroupByOutputType = {
    id: string
    titulo: string
    descripcion: string | null
    tipo: string | null
    url: string | null
    activo: boolean | null
    creado_en: Date | null
    _count: RecomendacionesCountAggregateOutputType | null
    _min: RecomendacionesMinAggregateOutputType | null
    _max: RecomendacionesMaxAggregateOutputType | null
  }

  type GetRecomendacionesGroupByPayload<T extends recomendacionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecomendacionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecomendacionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecomendacionesGroupByOutputType[P]>
            : GetScalarType<T[P], RecomendacionesGroupByOutputType[P]>
        }
      >
    >


  export type recomendacionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    tipo?: boolean
    url?: boolean
    activo?: boolean
    creado_en?: boolean
    recomendaciones_empleado?: boolean | recomendaciones$recomendaciones_empleadoArgs<ExtArgs>
    _count?: boolean | RecomendacionesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recomendaciones"]>

  export type recomendacionesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    tipo?: boolean
    url?: boolean
    activo?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["recomendaciones"]>

  export type recomendacionesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    tipo?: boolean
    url?: boolean
    activo?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["recomendaciones"]>

  export type recomendacionesSelectScalar = {
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    tipo?: boolean
    url?: boolean
    activo?: boolean
    creado_en?: boolean
  }

  export type recomendacionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descripcion" | "tipo" | "url" | "activo" | "creado_en", ExtArgs["result"]["recomendaciones"]>
  export type recomendacionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recomendaciones_empleado?: boolean | recomendaciones$recomendaciones_empleadoArgs<ExtArgs>
    _count?: boolean | RecomendacionesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type recomendacionesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type recomendacionesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $recomendacionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recomendaciones"
    objects: {
      recomendaciones_empleado: Prisma.$recomendaciones_empleadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descripcion: string | null
      tipo: string | null
      url: string | null
      activo: boolean | null
      creado_en: Date | null
    }, ExtArgs["result"]["recomendaciones"]>
    composites: {}
  }

  type recomendacionesGetPayload<S extends boolean | null | undefined | recomendacionesDefaultArgs> = $Result.GetResult<Prisma.$recomendacionesPayload, S>

  type recomendacionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recomendacionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecomendacionesCountAggregateInputType | true
    }

  export interface recomendacionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recomendaciones'], meta: { name: 'recomendaciones' } }
    /**
     * Find zero or one Recomendaciones that matches the filter.
     * @param {recomendacionesFindUniqueArgs} args - Arguments to find a Recomendaciones
     * @example
     * // Get one Recomendaciones
     * const recomendaciones = await prisma.recomendaciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recomendacionesFindUniqueArgs>(args: SelectSubset<T, recomendacionesFindUniqueArgs<ExtArgs>>): Prisma__recomendacionesClient<$Result.GetResult<Prisma.$recomendacionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recomendaciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recomendacionesFindUniqueOrThrowArgs} args - Arguments to find a Recomendaciones
     * @example
     * // Get one Recomendaciones
     * const recomendaciones = await prisma.recomendaciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recomendacionesFindUniqueOrThrowArgs>(args: SelectSubset<T, recomendacionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recomendacionesClient<$Result.GetResult<Prisma.$recomendacionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recomendaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recomendacionesFindFirstArgs} args - Arguments to find a Recomendaciones
     * @example
     * // Get one Recomendaciones
     * const recomendaciones = await prisma.recomendaciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recomendacionesFindFirstArgs>(args?: SelectSubset<T, recomendacionesFindFirstArgs<ExtArgs>>): Prisma__recomendacionesClient<$Result.GetResult<Prisma.$recomendacionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recomendaciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recomendacionesFindFirstOrThrowArgs} args - Arguments to find a Recomendaciones
     * @example
     * // Get one Recomendaciones
     * const recomendaciones = await prisma.recomendaciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recomendacionesFindFirstOrThrowArgs>(args?: SelectSubset<T, recomendacionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__recomendacionesClient<$Result.GetResult<Prisma.$recomendacionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recomendaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recomendacionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recomendaciones
     * const recomendaciones = await prisma.recomendaciones.findMany()
     * 
     * // Get first 10 Recomendaciones
     * const recomendaciones = await prisma.recomendaciones.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recomendacionesWithIdOnly = await prisma.recomendaciones.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recomendacionesFindManyArgs>(args?: SelectSubset<T, recomendacionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recomendacionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recomendaciones.
     * @param {recomendacionesCreateArgs} args - Arguments to create a Recomendaciones.
     * @example
     * // Create one Recomendaciones
     * const Recomendaciones = await prisma.recomendaciones.create({
     *   data: {
     *     // ... data to create a Recomendaciones
     *   }
     * })
     * 
     */
    create<T extends recomendacionesCreateArgs>(args: SelectSubset<T, recomendacionesCreateArgs<ExtArgs>>): Prisma__recomendacionesClient<$Result.GetResult<Prisma.$recomendacionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recomendaciones.
     * @param {recomendacionesCreateManyArgs} args - Arguments to create many Recomendaciones.
     * @example
     * // Create many Recomendaciones
     * const recomendaciones = await prisma.recomendaciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recomendacionesCreateManyArgs>(args?: SelectSubset<T, recomendacionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recomendaciones and returns the data saved in the database.
     * @param {recomendacionesCreateManyAndReturnArgs} args - Arguments to create many Recomendaciones.
     * @example
     * // Create many Recomendaciones
     * const recomendaciones = await prisma.recomendaciones.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recomendaciones and only return the `id`
     * const recomendacionesWithIdOnly = await prisma.recomendaciones.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends recomendacionesCreateManyAndReturnArgs>(args?: SelectSubset<T, recomendacionesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recomendacionesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recomendaciones.
     * @param {recomendacionesDeleteArgs} args - Arguments to delete one Recomendaciones.
     * @example
     * // Delete one Recomendaciones
     * const Recomendaciones = await prisma.recomendaciones.delete({
     *   where: {
     *     // ... filter to delete one Recomendaciones
     *   }
     * })
     * 
     */
    delete<T extends recomendacionesDeleteArgs>(args: SelectSubset<T, recomendacionesDeleteArgs<ExtArgs>>): Prisma__recomendacionesClient<$Result.GetResult<Prisma.$recomendacionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recomendaciones.
     * @param {recomendacionesUpdateArgs} args - Arguments to update one Recomendaciones.
     * @example
     * // Update one Recomendaciones
     * const recomendaciones = await prisma.recomendaciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recomendacionesUpdateArgs>(args: SelectSubset<T, recomendacionesUpdateArgs<ExtArgs>>): Prisma__recomendacionesClient<$Result.GetResult<Prisma.$recomendacionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recomendaciones.
     * @param {recomendacionesDeleteManyArgs} args - Arguments to filter Recomendaciones to delete.
     * @example
     * // Delete a few Recomendaciones
     * const { count } = await prisma.recomendaciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recomendacionesDeleteManyArgs>(args?: SelectSubset<T, recomendacionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recomendaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recomendacionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recomendaciones
     * const recomendaciones = await prisma.recomendaciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recomendacionesUpdateManyArgs>(args: SelectSubset<T, recomendacionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recomendaciones and returns the data updated in the database.
     * @param {recomendacionesUpdateManyAndReturnArgs} args - Arguments to update many Recomendaciones.
     * @example
     * // Update many Recomendaciones
     * const recomendaciones = await prisma.recomendaciones.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recomendaciones and only return the `id`
     * const recomendacionesWithIdOnly = await prisma.recomendaciones.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends recomendacionesUpdateManyAndReturnArgs>(args: SelectSubset<T, recomendacionesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recomendacionesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recomendaciones.
     * @param {recomendacionesUpsertArgs} args - Arguments to update or create a Recomendaciones.
     * @example
     * // Update or create a Recomendaciones
     * const recomendaciones = await prisma.recomendaciones.upsert({
     *   create: {
     *     // ... data to create a Recomendaciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recomendaciones we want to update
     *   }
     * })
     */
    upsert<T extends recomendacionesUpsertArgs>(args: SelectSubset<T, recomendacionesUpsertArgs<ExtArgs>>): Prisma__recomendacionesClient<$Result.GetResult<Prisma.$recomendacionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recomendaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recomendacionesCountArgs} args - Arguments to filter Recomendaciones to count.
     * @example
     * // Count the number of Recomendaciones
     * const count = await prisma.recomendaciones.count({
     *   where: {
     *     // ... the filter for the Recomendaciones we want to count
     *   }
     * })
    **/
    count<T extends recomendacionesCountArgs>(
      args?: Subset<T, recomendacionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecomendacionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recomendaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecomendacionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecomendacionesAggregateArgs>(args: Subset<T, RecomendacionesAggregateArgs>): Prisma.PrismaPromise<GetRecomendacionesAggregateType<T>>

    /**
     * Group by Recomendaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recomendacionesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recomendacionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recomendacionesGroupByArgs['orderBy'] }
        : { orderBy?: recomendacionesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recomendacionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecomendacionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recomendaciones model
   */
  readonly fields: recomendacionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recomendaciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recomendacionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recomendaciones_empleado<T extends recomendaciones$recomendaciones_empleadoArgs<ExtArgs> = {}>(args?: Subset<T, recomendaciones$recomendaciones_empleadoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recomendaciones_empleadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the recomendaciones model
   */
  interface recomendacionesFieldRefs {
    readonly id: FieldRef<"recomendaciones", 'String'>
    readonly titulo: FieldRef<"recomendaciones", 'String'>
    readonly descripcion: FieldRef<"recomendaciones", 'String'>
    readonly tipo: FieldRef<"recomendaciones", 'String'>
    readonly url: FieldRef<"recomendaciones", 'String'>
    readonly activo: FieldRef<"recomendaciones", 'Boolean'>
    readonly creado_en: FieldRef<"recomendaciones", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * recomendaciones findUnique
   */
  export type recomendacionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones
     */
    select?: recomendacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones
     */
    omit?: recomendacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendacionesInclude<ExtArgs> | null
    /**
     * Filter, which recomendaciones to fetch.
     */
    where: recomendacionesWhereUniqueInput
  }

  /**
   * recomendaciones findUniqueOrThrow
   */
  export type recomendacionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones
     */
    select?: recomendacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones
     */
    omit?: recomendacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendacionesInclude<ExtArgs> | null
    /**
     * Filter, which recomendaciones to fetch.
     */
    where: recomendacionesWhereUniqueInput
  }

  /**
   * recomendaciones findFirst
   */
  export type recomendacionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones
     */
    select?: recomendacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones
     */
    omit?: recomendacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendacionesInclude<ExtArgs> | null
    /**
     * Filter, which recomendaciones to fetch.
     */
    where?: recomendacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recomendaciones to fetch.
     */
    orderBy?: recomendacionesOrderByWithRelationInput | recomendacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recomendaciones.
     */
    cursor?: recomendacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recomendaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recomendaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recomendaciones.
     */
    distinct?: RecomendacionesScalarFieldEnum | RecomendacionesScalarFieldEnum[]
  }

  /**
   * recomendaciones findFirstOrThrow
   */
  export type recomendacionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones
     */
    select?: recomendacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones
     */
    omit?: recomendacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendacionesInclude<ExtArgs> | null
    /**
     * Filter, which recomendaciones to fetch.
     */
    where?: recomendacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recomendaciones to fetch.
     */
    orderBy?: recomendacionesOrderByWithRelationInput | recomendacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recomendaciones.
     */
    cursor?: recomendacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recomendaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recomendaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recomendaciones.
     */
    distinct?: RecomendacionesScalarFieldEnum | RecomendacionesScalarFieldEnum[]
  }

  /**
   * recomendaciones findMany
   */
  export type recomendacionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones
     */
    select?: recomendacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones
     */
    omit?: recomendacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendacionesInclude<ExtArgs> | null
    /**
     * Filter, which recomendaciones to fetch.
     */
    where?: recomendacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recomendaciones to fetch.
     */
    orderBy?: recomendacionesOrderByWithRelationInput | recomendacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recomendaciones.
     */
    cursor?: recomendacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recomendaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recomendaciones.
     */
    skip?: number
    distinct?: RecomendacionesScalarFieldEnum | RecomendacionesScalarFieldEnum[]
  }

  /**
   * recomendaciones create
   */
  export type recomendacionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones
     */
    select?: recomendacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones
     */
    omit?: recomendacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendacionesInclude<ExtArgs> | null
    /**
     * The data needed to create a recomendaciones.
     */
    data: XOR<recomendacionesCreateInput, recomendacionesUncheckedCreateInput>
  }

  /**
   * recomendaciones createMany
   */
  export type recomendacionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recomendaciones.
     */
    data: recomendacionesCreateManyInput | recomendacionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recomendaciones createManyAndReturn
   */
  export type recomendacionesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones
     */
    select?: recomendacionesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones
     */
    omit?: recomendacionesOmit<ExtArgs> | null
    /**
     * The data used to create many recomendaciones.
     */
    data: recomendacionesCreateManyInput | recomendacionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recomendaciones update
   */
  export type recomendacionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones
     */
    select?: recomendacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones
     */
    omit?: recomendacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendacionesInclude<ExtArgs> | null
    /**
     * The data needed to update a recomendaciones.
     */
    data: XOR<recomendacionesUpdateInput, recomendacionesUncheckedUpdateInput>
    /**
     * Choose, which recomendaciones to update.
     */
    where: recomendacionesWhereUniqueInput
  }

  /**
   * recomendaciones updateMany
   */
  export type recomendacionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recomendaciones.
     */
    data: XOR<recomendacionesUpdateManyMutationInput, recomendacionesUncheckedUpdateManyInput>
    /**
     * Filter which recomendaciones to update
     */
    where?: recomendacionesWhereInput
    /**
     * Limit how many recomendaciones to update.
     */
    limit?: number
  }

  /**
   * recomendaciones updateManyAndReturn
   */
  export type recomendacionesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones
     */
    select?: recomendacionesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones
     */
    omit?: recomendacionesOmit<ExtArgs> | null
    /**
     * The data used to update recomendaciones.
     */
    data: XOR<recomendacionesUpdateManyMutationInput, recomendacionesUncheckedUpdateManyInput>
    /**
     * Filter which recomendaciones to update
     */
    where?: recomendacionesWhereInput
    /**
     * Limit how many recomendaciones to update.
     */
    limit?: number
  }

  /**
   * recomendaciones upsert
   */
  export type recomendacionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones
     */
    select?: recomendacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones
     */
    omit?: recomendacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendacionesInclude<ExtArgs> | null
    /**
     * The filter to search for the recomendaciones to update in case it exists.
     */
    where: recomendacionesWhereUniqueInput
    /**
     * In case the recomendaciones found by the `where` argument doesn't exist, create a new recomendaciones with this data.
     */
    create: XOR<recomendacionesCreateInput, recomendacionesUncheckedCreateInput>
    /**
     * In case the recomendaciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recomendacionesUpdateInput, recomendacionesUncheckedUpdateInput>
  }

  /**
   * recomendaciones delete
   */
  export type recomendacionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones
     */
    select?: recomendacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones
     */
    omit?: recomendacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendacionesInclude<ExtArgs> | null
    /**
     * Filter which recomendaciones to delete.
     */
    where: recomendacionesWhereUniqueInput
  }

  /**
   * recomendaciones deleteMany
   */
  export type recomendacionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recomendaciones to delete
     */
    where?: recomendacionesWhereInput
    /**
     * Limit how many recomendaciones to delete.
     */
    limit?: number
  }

  /**
   * recomendaciones.recomendaciones_empleado
   */
  export type recomendaciones$recomendaciones_empleadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones_empleado
     */
    select?: recomendaciones_empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones_empleado
     */
    omit?: recomendaciones_empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendaciones_empleadoInclude<ExtArgs> | null
    where?: recomendaciones_empleadoWhereInput
    orderBy?: recomendaciones_empleadoOrderByWithRelationInput | recomendaciones_empleadoOrderByWithRelationInput[]
    cursor?: recomendaciones_empleadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recomendaciones_empleadoScalarFieldEnum | Recomendaciones_empleadoScalarFieldEnum[]
  }

  /**
   * recomendaciones without action
   */
  export type recomendacionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones
     */
    select?: recomendacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones
     */
    omit?: recomendacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendacionesInclude<ExtArgs> | null
  }


  /**
   * Model recomendaciones_empleado
   */

  export type AggregateRecomendaciones_empleado = {
    _count: Recomendaciones_empleadoCountAggregateOutputType | null
    _min: Recomendaciones_empleadoMinAggregateOutputType | null
    _max: Recomendaciones_empleadoMaxAggregateOutputType | null
  }

  export type Recomendaciones_empleadoMinAggregateOutputType = {
    id: string | null
    empleado_id: string | null
    recomendacion_id: string | null
    completado: boolean | null
    completado_en: Date | null
    asignado_en: Date | null
  }

  export type Recomendaciones_empleadoMaxAggregateOutputType = {
    id: string | null
    empleado_id: string | null
    recomendacion_id: string | null
    completado: boolean | null
    completado_en: Date | null
    asignado_en: Date | null
  }

  export type Recomendaciones_empleadoCountAggregateOutputType = {
    id: number
    empleado_id: number
    recomendacion_id: number
    completado: number
    completado_en: number
    asignado_en: number
    _all: number
  }


  export type Recomendaciones_empleadoMinAggregateInputType = {
    id?: true
    empleado_id?: true
    recomendacion_id?: true
    completado?: true
    completado_en?: true
    asignado_en?: true
  }

  export type Recomendaciones_empleadoMaxAggregateInputType = {
    id?: true
    empleado_id?: true
    recomendacion_id?: true
    completado?: true
    completado_en?: true
    asignado_en?: true
  }

  export type Recomendaciones_empleadoCountAggregateInputType = {
    id?: true
    empleado_id?: true
    recomendacion_id?: true
    completado?: true
    completado_en?: true
    asignado_en?: true
    _all?: true
  }

  export type Recomendaciones_empleadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recomendaciones_empleado to aggregate.
     */
    where?: recomendaciones_empleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recomendaciones_empleados to fetch.
     */
    orderBy?: recomendaciones_empleadoOrderByWithRelationInput | recomendaciones_empleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recomendaciones_empleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recomendaciones_empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recomendaciones_empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recomendaciones_empleados
    **/
    _count?: true | Recomendaciones_empleadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Recomendaciones_empleadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Recomendaciones_empleadoMaxAggregateInputType
  }

  export type GetRecomendaciones_empleadoAggregateType<T extends Recomendaciones_empleadoAggregateArgs> = {
        [P in keyof T & keyof AggregateRecomendaciones_empleado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecomendaciones_empleado[P]>
      : GetScalarType<T[P], AggregateRecomendaciones_empleado[P]>
  }




  export type recomendaciones_empleadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recomendaciones_empleadoWhereInput
    orderBy?: recomendaciones_empleadoOrderByWithAggregationInput | recomendaciones_empleadoOrderByWithAggregationInput[]
    by: Recomendaciones_empleadoScalarFieldEnum[] | Recomendaciones_empleadoScalarFieldEnum
    having?: recomendaciones_empleadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Recomendaciones_empleadoCountAggregateInputType | true
    _min?: Recomendaciones_empleadoMinAggregateInputType
    _max?: Recomendaciones_empleadoMaxAggregateInputType
  }

  export type Recomendaciones_empleadoGroupByOutputType = {
    id: string
    empleado_id: string
    recomendacion_id: string
    completado: boolean | null
    completado_en: Date | null
    asignado_en: Date | null
    _count: Recomendaciones_empleadoCountAggregateOutputType | null
    _min: Recomendaciones_empleadoMinAggregateOutputType | null
    _max: Recomendaciones_empleadoMaxAggregateOutputType | null
  }

  type GetRecomendaciones_empleadoGroupByPayload<T extends recomendaciones_empleadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Recomendaciones_empleadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Recomendaciones_empleadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Recomendaciones_empleadoGroupByOutputType[P]>
            : GetScalarType<T[P], Recomendaciones_empleadoGroupByOutputType[P]>
        }
      >
    >


  export type recomendaciones_empleadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleado_id?: boolean
    recomendacion_id?: boolean
    completado?: boolean
    completado_en?: boolean
    asignado_en?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    recomendaciones?: boolean | recomendacionesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recomendaciones_empleado"]>

  export type recomendaciones_empleadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleado_id?: boolean
    recomendacion_id?: boolean
    completado?: boolean
    completado_en?: boolean
    asignado_en?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    recomendaciones?: boolean | recomendacionesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recomendaciones_empleado"]>

  export type recomendaciones_empleadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleado_id?: boolean
    recomendacion_id?: boolean
    completado?: boolean
    completado_en?: boolean
    asignado_en?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    recomendaciones?: boolean | recomendacionesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recomendaciones_empleado"]>

  export type recomendaciones_empleadoSelectScalar = {
    id?: boolean
    empleado_id?: boolean
    recomendacion_id?: boolean
    completado?: boolean
    completado_en?: boolean
    asignado_en?: boolean
  }

  export type recomendaciones_empleadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "empleado_id" | "recomendacion_id" | "completado" | "completado_en" | "asignado_en", ExtArgs["result"]["recomendaciones_empleado"]>
  export type recomendaciones_empleadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    recomendaciones?: boolean | recomendacionesDefaultArgs<ExtArgs>
  }
  export type recomendaciones_empleadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    recomendaciones?: boolean | recomendacionesDefaultArgs<ExtArgs>
  }
  export type recomendaciones_empleadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    recomendaciones?: boolean | recomendacionesDefaultArgs<ExtArgs>
  }

  export type $recomendaciones_empleadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recomendaciones_empleado"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>
      recomendaciones: Prisma.$recomendacionesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      empleado_id: string
      recomendacion_id: string
      completado: boolean | null
      completado_en: Date | null
      asignado_en: Date | null
    }, ExtArgs["result"]["recomendaciones_empleado"]>
    composites: {}
  }

  type recomendaciones_empleadoGetPayload<S extends boolean | null | undefined | recomendaciones_empleadoDefaultArgs> = $Result.GetResult<Prisma.$recomendaciones_empleadoPayload, S>

  type recomendaciones_empleadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recomendaciones_empleadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Recomendaciones_empleadoCountAggregateInputType | true
    }

  export interface recomendaciones_empleadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recomendaciones_empleado'], meta: { name: 'recomendaciones_empleado' } }
    /**
     * Find zero or one Recomendaciones_empleado that matches the filter.
     * @param {recomendaciones_empleadoFindUniqueArgs} args - Arguments to find a Recomendaciones_empleado
     * @example
     * // Get one Recomendaciones_empleado
     * const recomendaciones_empleado = await prisma.recomendaciones_empleado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recomendaciones_empleadoFindUniqueArgs>(args: SelectSubset<T, recomendaciones_empleadoFindUniqueArgs<ExtArgs>>): Prisma__recomendaciones_empleadoClient<$Result.GetResult<Prisma.$recomendaciones_empleadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recomendaciones_empleado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recomendaciones_empleadoFindUniqueOrThrowArgs} args - Arguments to find a Recomendaciones_empleado
     * @example
     * // Get one Recomendaciones_empleado
     * const recomendaciones_empleado = await prisma.recomendaciones_empleado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recomendaciones_empleadoFindUniqueOrThrowArgs>(args: SelectSubset<T, recomendaciones_empleadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recomendaciones_empleadoClient<$Result.GetResult<Prisma.$recomendaciones_empleadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recomendaciones_empleado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recomendaciones_empleadoFindFirstArgs} args - Arguments to find a Recomendaciones_empleado
     * @example
     * // Get one Recomendaciones_empleado
     * const recomendaciones_empleado = await prisma.recomendaciones_empleado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recomendaciones_empleadoFindFirstArgs>(args?: SelectSubset<T, recomendaciones_empleadoFindFirstArgs<ExtArgs>>): Prisma__recomendaciones_empleadoClient<$Result.GetResult<Prisma.$recomendaciones_empleadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recomendaciones_empleado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recomendaciones_empleadoFindFirstOrThrowArgs} args - Arguments to find a Recomendaciones_empleado
     * @example
     * // Get one Recomendaciones_empleado
     * const recomendaciones_empleado = await prisma.recomendaciones_empleado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recomendaciones_empleadoFindFirstOrThrowArgs>(args?: SelectSubset<T, recomendaciones_empleadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__recomendaciones_empleadoClient<$Result.GetResult<Prisma.$recomendaciones_empleadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recomendaciones_empleados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recomendaciones_empleadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recomendaciones_empleados
     * const recomendaciones_empleados = await prisma.recomendaciones_empleado.findMany()
     * 
     * // Get first 10 Recomendaciones_empleados
     * const recomendaciones_empleados = await prisma.recomendaciones_empleado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recomendaciones_empleadoWithIdOnly = await prisma.recomendaciones_empleado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recomendaciones_empleadoFindManyArgs>(args?: SelectSubset<T, recomendaciones_empleadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recomendaciones_empleadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recomendaciones_empleado.
     * @param {recomendaciones_empleadoCreateArgs} args - Arguments to create a Recomendaciones_empleado.
     * @example
     * // Create one Recomendaciones_empleado
     * const Recomendaciones_empleado = await prisma.recomendaciones_empleado.create({
     *   data: {
     *     // ... data to create a Recomendaciones_empleado
     *   }
     * })
     * 
     */
    create<T extends recomendaciones_empleadoCreateArgs>(args: SelectSubset<T, recomendaciones_empleadoCreateArgs<ExtArgs>>): Prisma__recomendaciones_empleadoClient<$Result.GetResult<Prisma.$recomendaciones_empleadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recomendaciones_empleados.
     * @param {recomendaciones_empleadoCreateManyArgs} args - Arguments to create many Recomendaciones_empleados.
     * @example
     * // Create many Recomendaciones_empleados
     * const recomendaciones_empleado = await prisma.recomendaciones_empleado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recomendaciones_empleadoCreateManyArgs>(args?: SelectSubset<T, recomendaciones_empleadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recomendaciones_empleados and returns the data saved in the database.
     * @param {recomendaciones_empleadoCreateManyAndReturnArgs} args - Arguments to create many Recomendaciones_empleados.
     * @example
     * // Create many Recomendaciones_empleados
     * const recomendaciones_empleado = await prisma.recomendaciones_empleado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recomendaciones_empleados and only return the `id`
     * const recomendaciones_empleadoWithIdOnly = await prisma.recomendaciones_empleado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends recomendaciones_empleadoCreateManyAndReturnArgs>(args?: SelectSubset<T, recomendaciones_empleadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recomendaciones_empleadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recomendaciones_empleado.
     * @param {recomendaciones_empleadoDeleteArgs} args - Arguments to delete one Recomendaciones_empleado.
     * @example
     * // Delete one Recomendaciones_empleado
     * const Recomendaciones_empleado = await prisma.recomendaciones_empleado.delete({
     *   where: {
     *     // ... filter to delete one Recomendaciones_empleado
     *   }
     * })
     * 
     */
    delete<T extends recomendaciones_empleadoDeleteArgs>(args: SelectSubset<T, recomendaciones_empleadoDeleteArgs<ExtArgs>>): Prisma__recomendaciones_empleadoClient<$Result.GetResult<Prisma.$recomendaciones_empleadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recomendaciones_empleado.
     * @param {recomendaciones_empleadoUpdateArgs} args - Arguments to update one Recomendaciones_empleado.
     * @example
     * // Update one Recomendaciones_empleado
     * const recomendaciones_empleado = await prisma.recomendaciones_empleado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recomendaciones_empleadoUpdateArgs>(args: SelectSubset<T, recomendaciones_empleadoUpdateArgs<ExtArgs>>): Prisma__recomendaciones_empleadoClient<$Result.GetResult<Prisma.$recomendaciones_empleadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recomendaciones_empleados.
     * @param {recomendaciones_empleadoDeleteManyArgs} args - Arguments to filter Recomendaciones_empleados to delete.
     * @example
     * // Delete a few Recomendaciones_empleados
     * const { count } = await prisma.recomendaciones_empleado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recomendaciones_empleadoDeleteManyArgs>(args?: SelectSubset<T, recomendaciones_empleadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recomendaciones_empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recomendaciones_empleadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recomendaciones_empleados
     * const recomendaciones_empleado = await prisma.recomendaciones_empleado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recomendaciones_empleadoUpdateManyArgs>(args: SelectSubset<T, recomendaciones_empleadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recomendaciones_empleados and returns the data updated in the database.
     * @param {recomendaciones_empleadoUpdateManyAndReturnArgs} args - Arguments to update many Recomendaciones_empleados.
     * @example
     * // Update many Recomendaciones_empleados
     * const recomendaciones_empleado = await prisma.recomendaciones_empleado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recomendaciones_empleados and only return the `id`
     * const recomendaciones_empleadoWithIdOnly = await prisma.recomendaciones_empleado.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends recomendaciones_empleadoUpdateManyAndReturnArgs>(args: SelectSubset<T, recomendaciones_empleadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recomendaciones_empleadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recomendaciones_empleado.
     * @param {recomendaciones_empleadoUpsertArgs} args - Arguments to update or create a Recomendaciones_empleado.
     * @example
     * // Update or create a Recomendaciones_empleado
     * const recomendaciones_empleado = await prisma.recomendaciones_empleado.upsert({
     *   create: {
     *     // ... data to create a Recomendaciones_empleado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recomendaciones_empleado we want to update
     *   }
     * })
     */
    upsert<T extends recomendaciones_empleadoUpsertArgs>(args: SelectSubset<T, recomendaciones_empleadoUpsertArgs<ExtArgs>>): Prisma__recomendaciones_empleadoClient<$Result.GetResult<Prisma.$recomendaciones_empleadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recomendaciones_empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recomendaciones_empleadoCountArgs} args - Arguments to filter Recomendaciones_empleados to count.
     * @example
     * // Count the number of Recomendaciones_empleados
     * const count = await prisma.recomendaciones_empleado.count({
     *   where: {
     *     // ... the filter for the Recomendaciones_empleados we want to count
     *   }
     * })
    **/
    count<T extends recomendaciones_empleadoCountArgs>(
      args?: Subset<T, recomendaciones_empleadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Recomendaciones_empleadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recomendaciones_empleado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recomendaciones_empleadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Recomendaciones_empleadoAggregateArgs>(args: Subset<T, Recomendaciones_empleadoAggregateArgs>): Prisma.PrismaPromise<GetRecomendaciones_empleadoAggregateType<T>>

    /**
     * Group by Recomendaciones_empleado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recomendaciones_empleadoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recomendaciones_empleadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recomendaciones_empleadoGroupByArgs['orderBy'] }
        : { orderBy?: recomendaciones_empleadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recomendaciones_empleadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecomendaciones_empleadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recomendaciones_empleado model
   */
  readonly fields: recomendaciones_empleadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recomendaciones_empleado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recomendaciones_empleadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recomendaciones<T extends recomendacionesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, recomendacionesDefaultArgs<ExtArgs>>): Prisma__recomendacionesClient<$Result.GetResult<Prisma.$recomendacionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the recomendaciones_empleado model
   */
  interface recomendaciones_empleadoFieldRefs {
    readonly id: FieldRef<"recomendaciones_empleado", 'String'>
    readonly empleado_id: FieldRef<"recomendaciones_empleado", 'String'>
    readonly recomendacion_id: FieldRef<"recomendaciones_empleado", 'String'>
    readonly completado: FieldRef<"recomendaciones_empleado", 'Boolean'>
    readonly completado_en: FieldRef<"recomendaciones_empleado", 'DateTime'>
    readonly asignado_en: FieldRef<"recomendaciones_empleado", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * recomendaciones_empleado findUnique
   */
  export type recomendaciones_empleadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones_empleado
     */
    select?: recomendaciones_empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones_empleado
     */
    omit?: recomendaciones_empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendaciones_empleadoInclude<ExtArgs> | null
    /**
     * Filter, which recomendaciones_empleado to fetch.
     */
    where: recomendaciones_empleadoWhereUniqueInput
  }

  /**
   * recomendaciones_empleado findUniqueOrThrow
   */
  export type recomendaciones_empleadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones_empleado
     */
    select?: recomendaciones_empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones_empleado
     */
    omit?: recomendaciones_empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendaciones_empleadoInclude<ExtArgs> | null
    /**
     * Filter, which recomendaciones_empleado to fetch.
     */
    where: recomendaciones_empleadoWhereUniqueInput
  }

  /**
   * recomendaciones_empleado findFirst
   */
  export type recomendaciones_empleadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones_empleado
     */
    select?: recomendaciones_empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones_empleado
     */
    omit?: recomendaciones_empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendaciones_empleadoInclude<ExtArgs> | null
    /**
     * Filter, which recomendaciones_empleado to fetch.
     */
    where?: recomendaciones_empleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recomendaciones_empleados to fetch.
     */
    orderBy?: recomendaciones_empleadoOrderByWithRelationInput | recomendaciones_empleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recomendaciones_empleados.
     */
    cursor?: recomendaciones_empleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recomendaciones_empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recomendaciones_empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recomendaciones_empleados.
     */
    distinct?: Recomendaciones_empleadoScalarFieldEnum | Recomendaciones_empleadoScalarFieldEnum[]
  }

  /**
   * recomendaciones_empleado findFirstOrThrow
   */
  export type recomendaciones_empleadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones_empleado
     */
    select?: recomendaciones_empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones_empleado
     */
    omit?: recomendaciones_empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendaciones_empleadoInclude<ExtArgs> | null
    /**
     * Filter, which recomendaciones_empleado to fetch.
     */
    where?: recomendaciones_empleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recomendaciones_empleados to fetch.
     */
    orderBy?: recomendaciones_empleadoOrderByWithRelationInput | recomendaciones_empleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recomendaciones_empleados.
     */
    cursor?: recomendaciones_empleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recomendaciones_empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recomendaciones_empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recomendaciones_empleados.
     */
    distinct?: Recomendaciones_empleadoScalarFieldEnum | Recomendaciones_empleadoScalarFieldEnum[]
  }

  /**
   * recomendaciones_empleado findMany
   */
  export type recomendaciones_empleadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones_empleado
     */
    select?: recomendaciones_empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones_empleado
     */
    omit?: recomendaciones_empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendaciones_empleadoInclude<ExtArgs> | null
    /**
     * Filter, which recomendaciones_empleados to fetch.
     */
    where?: recomendaciones_empleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recomendaciones_empleados to fetch.
     */
    orderBy?: recomendaciones_empleadoOrderByWithRelationInput | recomendaciones_empleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recomendaciones_empleados.
     */
    cursor?: recomendaciones_empleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recomendaciones_empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recomendaciones_empleados.
     */
    skip?: number
    distinct?: Recomendaciones_empleadoScalarFieldEnum | Recomendaciones_empleadoScalarFieldEnum[]
  }

  /**
   * recomendaciones_empleado create
   */
  export type recomendaciones_empleadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones_empleado
     */
    select?: recomendaciones_empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones_empleado
     */
    omit?: recomendaciones_empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendaciones_empleadoInclude<ExtArgs> | null
    /**
     * The data needed to create a recomendaciones_empleado.
     */
    data: XOR<recomendaciones_empleadoCreateInput, recomendaciones_empleadoUncheckedCreateInput>
  }

  /**
   * recomendaciones_empleado createMany
   */
  export type recomendaciones_empleadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recomendaciones_empleados.
     */
    data: recomendaciones_empleadoCreateManyInput | recomendaciones_empleadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recomendaciones_empleado createManyAndReturn
   */
  export type recomendaciones_empleadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones_empleado
     */
    select?: recomendaciones_empleadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones_empleado
     */
    omit?: recomendaciones_empleadoOmit<ExtArgs> | null
    /**
     * The data used to create many recomendaciones_empleados.
     */
    data: recomendaciones_empleadoCreateManyInput | recomendaciones_empleadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendaciones_empleadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * recomendaciones_empleado update
   */
  export type recomendaciones_empleadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones_empleado
     */
    select?: recomendaciones_empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones_empleado
     */
    omit?: recomendaciones_empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendaciones_empleadoInclude<ExtArgs> | null
    /**
     * The data needed to update a recomendaciones_empleado.
     */
    data: XOR<recomendaciones_empleadoUpdateInput, recomendaciones_empleadoUncheckedUpdateInput>
    /**
     * Choose, which recomendaciones_empleado to update.
     */
    where: recomendaciones_empleadoWhereUniqueInput
  }

  /**
   * recomendaciones_empleado updateMany
   */
  export type recomendaciones_empleadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recomendaciones_empleados.
     */
    data: XOR<recomendaciones_empleadoUpdateManyMutationInput, recomendaciones_empleadoUncheckedUpdateManyInput>
    /**
     * Filter which recomendaciones_empleados to update
     */
    where?: recomendaciones_empleadoWhereInput
    /**
     * Limit how many recomendaciones_empleados to update.
     */
    limit?: number
  }

  /**
   * recomendaciones_empleado updateManyAndReturn
   */
  export type recomendaciones_empleadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones_empleado
     */
    select?: recomendaciones_empleadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones_empleado
     */
    omit?: recomendaciones_empleadoOmit<ExtArgs> | null
    /**
     * The data used to update recomendaciones_empleados.
     */
    data: XOR<recomendaciones_empleadoUpdateManyMutationInput, recomendaciones_empleadoUncheckedUpdateManyInput>
    /**
     * Filter which recomendaciones_empleados to update
     */
    where?: recomendaciones_empleadoWhereInput
    /**
     * Limit how many recomendaciones_empleados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendaciones_empleadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * recomendaciones_empleado upsert
   */
  export type recomendaciones_empleadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones_empleado
     */
    select?: recomendaciones_empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones_empleado
     */
    omit?: recomendaciones_empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendaciones_empleadoInclude<ExtArgs> | null
    /**
     * The filter to search for the recomendaciones_empleado to update in case it exists.
     */
    where: recomendaciones_empleadoWhereUniqueInput
    /**
     * In case the recomendaciones_empleado found by the `where` argument doesn't exist, create a new recomendaciones_empleado with this data.
     */
    create: XOR<recomendaciones_empleadoCreateInput, recomendaciones_empleadoUncheckedCreateInput>
    /**
     * In case the recomendaciones_empleado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recomendaciones_empleadoUpdateInput, recomendaciones_empleadoUncheckedUpdateInput>
  }

  /**
   * recomendaciones_empleado delete
   */
  export type recomendaciones_empleadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones_empleado
     */
    select?: recomendaciones_empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones_empleado
     */
    omit?: recomendaciones_empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendaciones_empleadoInclude<ExtArgs> | null
    /**
     * Filter which recomendaciones_empleado to delete.
     */
    where: recomendaciones_empleadoWhereUniqueInput
  }

  /**
   * recomendaciones_empleado deleteMany
   */
  export type recomendaciones_empleadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recomendaciones_empleados to delete
     */
    where?: recomendaciones_empleadoWhereInput
    /**
     * Limit how many recomendaciones_empleados to delete.
     */
    limit?: number
  }

  /**
   * recomendaciones_empleado without action
   */
  export type recomendaciones_empleadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones_empleado
     */
    select?: recomendaciones_empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones_empleado
     */
    omit?: recomendaciones_empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendaciones_empleadoInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    password_hash: string | null
    rol: string | null
    empresa: string | null
    cargo: string | null
    avatar_url: string | null
    activo: boolean | null
    creado_en: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    email: string | null
    password_hash: string | null
    rol: string | null
    empresa: string | null
    cargo: string | null
    avatar_url: string | null
    activo: boolean | null
    creado_en: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nombre: number
    email: number
    password_hash: number
    rol: number
    empresa: number
    cargo: number
    avatar_url: number
    activo: number
    creado_en: number
    _all: number
  }


  export type UsuariosMinAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password_hash?: true
    rol?: true
    empresa?: true
    cargo?: true
    avatar_url?: true
    activo?: true
    creado_en?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password_hash?: true
    rol?: true
    empresa?: true
    cargo?: true
    avatar_url?: true
    activo?: true
    creado_en?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nombre?: true
    email?: true
    password_hash?: true
    rol?: true
    empresa?: true
    cargo?: true
    avatar_url?: true
    activo?: true
    creado_en?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa: string | null
    cargo: string | null
    avatar_url: string | null
    activo: boolean | null
    creado_en: Date | null
    _count: UsuariosCountAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password_hash?: boolean
    rol?: boolean
    empresa?: boolean
    cargo?: boolean
    avatar_url?: boolean
    activo?: boolean
    creado_en?: boolean
    checkins?: boolean | usuarios$checkinsArgs<ExtArgs>
    citas_citas_empleado_idTousuarios?: boolean | usuarios$citas_citas_empleado_idTousuariosArgs<ExtArgs>
    citas_citas_psicologo_idTousuarios?: boolean | usuarios$citas_citas_psicologo_idTousuariosArgs<ExtArgs>
    mensajes_mensajes_destinatario_idTousuarios?: boolean | usuarios$mensajes_mensajes_destinatario_idTousuariosArgs<ExtArgs>
    mensajes_mensajes_remitente_idTousuarios?: boolean | usuarios$mensajes_mensajes_remitente_idTousuariosArgs<ExtArgs>
    psicologos?: boolean | usuarios$psicologosArgs<ExtArgs>
    recomendaciones_empleado?: boolean | usuarios$recomendaciones_empleadoArgs<ExtArgs>
    valoraciones_valoraciones_empleado_idTousuarios?: boolean | usuarios$valoraciones_valoraciones_empleado_idTousuariosArgs<ExtArgs>
    valoraciones_valoraciones_psicologo_idTousuarios?: boolean | usuarios$valoraciones_valoraciones_psicologo_idTousuariosArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password_hash?: boolean
    rol?: boolean
    empresa?: boolean
    cargo?: boolean
    avatar_url?: boolean
    activo?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    email?: boolean
    password_hash?: boolean
    rol?: boolean
    empresa?: boolean
    cargo?: boolean
    avatar_url?: boolean
    activo?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id?: boolean
    nombre?: boolean
    email?: boolean
    password_hash?: boolean
    rol?: boolean
    empresa?: boolean
    cargo?: boolean
    avatar_url?: boolean
    activo?: boolean
    creado_en?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "email" | "password_hash" | "rol" | "empresa" | "cargo" | "avatar_url" | "activo" | "creado_en", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkins?: boolean | usuarios$checkinsArgs<ExtArgs>
    citas_citas_empleado_idTousuarios?: boolean | usuarios$citas_citas_empleado_idTousuariosArgs<ExtArgs>
    citas_citas_psicologo_idTousuarios?: boolean | usuarios$citas_citas_psicologo_idTousuariosArgs<ExtArgs>
    mensajes_mensajes_destinatario_idTousuarios?: boolean | usuarios$mensajes_mensajes_destinatario_idTousuariosArgs<ExtArgs>
    mensajes_mensajes_remitente_idTousuarios?: boolean | usuarios$mensajes_mensajes_remitente_idTousuariosArgs<ExtArgs>
    psicologos?: boolean | usuarios$psicologosArgs<ExtArgs>
    recomendaciones_empleado?: boolean | usuarios$recomendaciones_empleadoArgs<ExtArgs>
    valoraciones_valoraciones_empleado_idTousuarios?: boolean | usuarios$valoraciones_valoraciones_empleado_idTousuariosArgs<ExtArgs>
    valoraciones_valoraciones_psicologo_idTousuarios?: boolean | usuarios$valoraciones_valoraciones_psicologo_idTousuariosArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      checkins: Prisma.$checkinsPayload<ExtArgs>[]
      citas_citas_empleado_idTousuarios: Prisma.$citasPayload<ExtArgs>[]
      citas_citas_psicologo_idTousuarios: Prisma.$citasPayload<ExtArgs>[]
      mensajes_mensajes_destinatario_idTousuarios: Prisma.$mensajesPayload<ExtArgs>[]
      mensajes_mensajes_remitente_idTousuarios: Prisma.$mensajesPayload<ExtArgs>[]
      psicologos: Prisma.$psicologosPayload<ExtArgs> | null
      recomendaciones_empleado: Prisma.$recomendaciones_empleadoPayload<ExtArgs>[]
      valoraciones_valoraciones_empleado_idTousuarios: Prisma.$valoracionesPayload<ExtArgs>[]
      valoraciones_valoraciones_psicologo_idTousuarios: Prisma.$valoracionesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      email: string
      password_hash: string
      rol: string
      empresa: string | null
      cargo: string | null
      avatar_url: string | null
      activo: boolean | null
      creado_en: Date | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    checkins<T extends usuarios$checkinsArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$checkinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$checkinsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    citas_citas_empleado_idTousuarios<T extends usuarios$citas_citas_empleado_idTousuariosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$citas_citas_empleado_idTousuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    citas_citas_psicologo_idTousuarios<T extends usuarios$citas_citas_psicologo_idTousuariosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$citas_citas_psicologo_idTousuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mensajes_mensajes_destinatario_idTousuarios<T extends usuarios$mensajes_mensajes_destinatario_idTousuariosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$mensajes_mensajes_destinatario_idTousuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mensajes_mensajes_remitente_idTousuarios<T extends usuarios$mensajes_mensajes_remitente_idTousuariosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$mensajes_mensajes_remitente_idTousuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mensajesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    psicologos<T extends usuarios$psicologosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$psicologosArgs<ExtArgs>>): Prisma__psicologosClient<$Result.GetResult<Prisma.$psicologosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    recomendaciones_empleado<T extends usuarios$recomendaciones_empleadoArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$recomendaciones_empleadoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recomendaciones_empleadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    valoraciones_valoraciones_empleado_idTousuarios<T extends usuarios$valoraciones_valoraciones_empleado_idTousuariosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$valoraciones_valoraciones_empleado_idTousuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$valoracionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    valoraciones_valoraciones_psicologo_idTousuarios<T extends usuarios$valoraciones_valoraciones_psicologo_idTousuariosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$valoraciones_valoraciones_psicologo_idTousuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$valoracionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'String'>
    readonly nombre: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly password_hash: FieldRef<"usuarios", 'String'>
    readonly rol: FieldRef<"usuarios", 'String'>
    readonly empresa: FieldRef<"usuarios", 'String'>
    readonly cargo: FieldRef<"usuarios", 'String'>
    readonly avatar_url: FieldRef<"usuarios", 'String'>
    readonly activo: FieldRef<"usuarios", 'Boolean'>
    readonly creado_en: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.checkins
   */
  export type usuarios$checkinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkins
     */
    select?: checkinsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkins
     */
    omit?: checkinsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkinsInclude<ExtArgs> | null
    where?: checkinsWhereInput
    orderBy?: checkinsOrderByWithRelationInput | checkinsOrderByWithRelationInput[]
    cursor?: checkinsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckinsScalarFieldEnum | CheckinsScalarFieldEnum[]
  }

  /**
   * usuarios.citas_citas_empleado_idTousuarios
   */
  export type usuarios$citas_citas_empleado_idTousuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citas
     */
    select?: citasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the citas
     */
    omit?: citasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citasInclude<ExtArgs> | null
    where?: citasWhereInput
    orderBy?: citasOrderByWithRelationInput | citasOrderByWithRelationInput[]
    cursor?: citasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitasScalarFieldEnum | CitasScalarFieldEnum[]
  }

  /**
   * usuarios.citas_citas_psicologo_idTousuarios
   */
  export type usuarios$citas_citas_psicologo_idTousuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the citas
     */
    select?: citasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the citas
     */
    omit?: citasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: citasInclude<ExtArgs> | null
    where?: citasWhereInput
    orderBy?: citasOrderByWithRelationInput | citasOrderByWithRelationInput[]
    cursor?: citasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitasScalarFieldEnum | CitasScalarFieldEnum[]
  }

  /**
   * usuarios.mensajes_mensajes_destinatario_idTousuarios
   */
  export type usuarios$mensajes_mensajes_destinatario_idTousuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    where?: mensajesWhereInput
    orderBy?: mensajesOrderByWithRelationInput | mensajesOrderByWithRelationInput[]
    cursor?: mensajesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensajesScalarFieldEnum | MensajesScalarFieldEnum[]
  }

  /**
   * usuarios.mensajes_mensajes_remitente_idTousuarios
   */
  export type usuarios$mensajes_mensajes_remitente_idTousuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mensajes
     */
    select?: mensajesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mensajes
     */
    omit?: mensajesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mensajesInclude<ExtArgs> | null
    where?: mensajesWhereInput
    orderBy?: mensajesOrderByWithRelationInput | mensajesOrderByWithRelationInput[]
    cursor?: mensajesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensajesScalarFieldEnum | MensajesScalarFieldEnum[]
  }

  /**
   * usuarios.psicologos
   */
  export type usuarios$psicologosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the psicologos
     */
    select?: psicologosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the psicologos
     */
    omit?: psicologosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: psicologosInclude<ExtArgs> | null
    where?: psicologosWhereInput
  }

  /**
   * usuarios.recomendaciones_empleado
   */
  export type usuarios$recomendaciones_empleadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recomendaciones_empleado
     */
    select?: recomendaciones_empleadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recomendaciones_empleado
     */
    omit?: recomendaciones_empleadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recomendaciones_empleadoInclude<ExtArgs> | null
    where?: recomendaciones_empleadoWhereInput
    orderBy?: recomendaciones_empleadoOrderByWithRelationInput | recomendaciones_empleadoOrderByWithRelationInput[]
    cursor?: recomendaciones_empleadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recomendaciones_empleadoScalarFieldEnum | Recomendaciones_empleadoScalarFieldEnum[]
  }

  /**
   * usuarios.valoraciones_valoraciones_empleado_idTousuarios
   */
  export type usuarios$valoraciones_valoraciones_empleado_idTousuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valoraciones
     */
    select?: valoracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the valoraciones
     */
    omit?: valoracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valoracionesInclude<ExtArgs> | null
    where?: valoracionesWhereInput
    orderBy?: valoracionesOrderByWithRelationInput | valoracionesOrderByWithRelationInput[]
    cursor?: valoracionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ValoracionesScalarFieldEnum | ValoracionesScalarFieldEnum[]
  }

  /**
   * usuarios.valoraciones_valoraciones_psicologo_idTousuarios
   */
  export type usuarios$valoraciones_valoraciones_psicologo_idTousuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valoraciones
     */
    select?: valoracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the valoraciones
     */
    omit?: valoracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valoracionesInclude<ExtArgs> | null
    where?: valoracionesWhereInput
    orderBy?: valoracionesOrderByWithRelationInput | valoracionesOrderByWithRelationInput[]
    cursor?: valoracionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ValoracionesScalarFieldEnum | ValoracionesScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Model valoraciones
   */

  export type AggregateValoraciones = {
    _count: ValoracionesCountAggregateOutputType | null
    _avg: ValoracionesAvgAggregateOutputType | null
    _sum: ValoracionesSumAggregateOutputType | null
    _min: ValoracionesMinAggregateOutputType | null
    _max: ValoracionesMaxAggregateOutputType | null
  }

  export type ValoracionesAvgAggregateOutputType = {
    puntuacion: number | null
  }

  export type ValoracionesSumAggregateOutputType = {
    puntuacion: number | null
  }

  export type ValoracionesMinAggregateOutputType = {
    id: string | null
    empleado_id: string | null
    psicologo_id: string | null
    cita_id: string | null
    puntuacion: number | null
    comentario: string | null
    creado_en: Date | null
  }

  export type ValoracionesMaxAggregateOutputType = {
    id: string | null
    empleado_id: string | null
    psicologo_id: string | null
    cita_id: string | null
    puntuacion: number | null
    comentario: string | null
    creado_en: Date | null
  }

  export type ValoracionesCountAggregateOutputType = {
    id: number
    empleado_id: number
    psicologo_id: number
    cita_id: number
    puntuacion: number
    comentario: number
    creado_en: number
    _all: number
  }


  export type ValoracionesAvgAggregateInputType = {
    puntuacion?: true
  }

  export type ValoracionesSumAggregateInputType = {
    puntuacion?: true
  }

  export type ValoracionesMinAggregateInputType = {
    id?: true
    empleado_id?: true
    psicologo_id?: true
    cita_id?: true
    puntuacion?: true
    comentario?: true
    creado_en?: true
  }

  export type ValoracionesMaxAggregateInputType = {
    id?: true
    empleado_id?: true
    psicologo_id?: true
    cita_id?: true
    puntuacion?: true
    comentario?: true
    creado_en?: true
  }

  export type ValoracionesCountAggregateInputType = {
    id?: true
    empleado_id?: true
    psicologo_id?: true
    cita_id?: true
    puntuacion?: true
    comentario?: true
    creado_en?: true
    _all?: true
  }

  export type ValoracionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which valoraciones to aggregate.
     */
    where?: valoracionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of valoraciones to fetch.
     */
    orderBy?: valoracionesOrderByWithRelationInput | valoracionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: valoracionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` valoraciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` valoraciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned valoraciones
    **/
    _count?: true | ValoracionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ValoracionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ValoracionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValoracionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValoracionesMaxAggregateInputType
  }

  export type GetValoracionesAggregateType<T extends ValoracionesAggregateArgs> = {
        [P in keyof T & keyof AggregateValoraciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValoraciones[P]>
      : GetScalarType<T[P], AggregateValoraciones[P]>
  }




  export type valoracionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: valoracionesWhereInput
    orderBy?: valoracionesOrderByWithAggregationInput | valoracionesOrderByWithAggregationInput[]
    by: ValoracionesScalarFieldEnum[] | ValoracionesScalarFieldEnum
    having?: valoracionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValoracionesCountAggregateInputType | true
    _avg?: ValoracionesAvgAggregateInputType
    _sum?: ValoracionesSumAggregateInputType
    _min?: ValoracionesMinAggregateInputType
    _max?: ValoracionesMaxAggregateInputType
  }

  export type ValoracionesGroupByOutputType = {
    id: string
    empleado_id: string
    psicologo_id: string
    cita_id: string
    puntuacion: number
    comentario: string | null
    creado_en: Date | null
    _count: ValoracionesCountAggregateOutputType | null
    _avg: ValoracionesAvgAggregateOutputType | null
    _sum: ValoracionesSumAggregateOutputType | null
    _min: ValoracionesMinAggregateOutputType | null
    _max: ValoracionesMaxAggregateOutputType | null
  }

  type GetValoracionesGroupByPayload<T extends valoracionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValoracionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValoracionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValoracionesGroupByOutputType[P]>
            : GetScalarType<T[P], ValoracionesGroupByOutputType[P]>
        }
      >
    >


  export type valoracionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleado_id?: boolean
    psicologo_id?: boolean
    cita_id?: boolean
    puntuacion?: boolean
    comentario?: boolean
    creado_en?: boolean
    citas?: boolean | citasDefaultArgs<ExtArgs>
    usuarios_valoraciones_empleado_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    usuarios_valoraciones_psicologo_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["valoraciones"]>

  export type valoracionesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleado_id?: boolean
    psicologo_id?: boolean
    cita_id?: boolean
    puntuacion?: boolean
    comentario?: boolean
    creado_en?: boolean
    citas?: boolean | citasDefaultArgs<ExtArgs>
    usuarios_valoraciones_empleado_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    usuarios_valoraciones_psicologo_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["valoraciones"]>

  export type valoracionesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    empleado_id?: boolean
    psicologo_id?: boolean
    cita_id?: boolean
    puntuacion?: boolean
    comentario?: boolean
    creado_en?: boolean
    citas?: boolean | citasDefaultArgs<ExtArgs>
    usuarios_valoraciones_empleado_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    usuarios_valoraciones_psicologo_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["valoraciones"]>

  export type valoracionesSelectScalar = {
    id?: boolean
    empleado_id?: boolean
    psicologo_id?: boolean
    cita_id?: boolean
    puntuacion?: boolean
    comentario?: boolean
    creado_en?: boolean
  }

  export type valoracionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "empleado_id" | "psicologo_id" | "cita_id" | "puntuacion" | "comentario" | "creado_en", ExtArgs["result"]["valoraciones"]>
  export type valoracionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    citas?: boolean | citasDefaultArgs<ExtArgs>
    usuarios_valoraciones_empleado_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    usuarios_valoraciones_psicologo_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type valoracionesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    citas?: boolean | citasDefaultArgs<ExtArgs>
    usuarios_valoraciones_empleado_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    usuarios_valoraciones_psicologo_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type valoracionesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    citas?: boolean | citasDefaultArgs<ExtArgs>
    usuarios_valoraciones_empleado_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    usuarios_valoraciones_psicologo_idTousuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $valoracionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "valoraciones"
    objects: {
      citas: Prisma.$citasPayload<ExtArgs>
      usuarios_valoraciones_empleado_idTousuarios: Prisma.$usuariosPayload<ExtArgs>
      usuarios_valoraciones_psicologo_idTousuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      empleado_id: string
      psicologo_id: string
      cita_id: string
      puntuacion: number
      comentario: string | null
      creado_en: Date | null
    }, ExtArgs["result"]["valoraciones"]>
    composites: {}
  }

  type valoracionesGetPayload<S extends boolean | null | undefined | valoracionesDefaultArgs> = $Result.GetResult<Prisma.$valoracionesPayload, S>

  type valoracionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<valoracionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ValoracionesCountAggregateInputType | true
    }

  export interface valoracionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['valoraciones'], meta: { name: 'valoraciones' } }
    /**
     * Find zero or one Valoraciones that matches the filter.
     * @param {valoracionesFindUniqueArgs} args - Arguments to find a Valoraciones
     * @example
     * // Get one Valoraciones
     * const valoraciones = await prisma.valoraciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends valoracionesFindUniqueArgs>(args: SelectSubset<T, valoracionesFindUniqueArgs<ExtArgs>>): Prisma__valoracionesClient<$Result.GetResult<Prisma.$valoracionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Valoraciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {valoracionesFindUniqueOrThrowArgs} args - Arguments to find a Valoraciones
     * @example
     * // Get one Valoraciones
     * const valoraciones = await prisma.valoraciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends valoracionesFindUniqueOrThrowArgs>(args: SelectSubset<T, valoracionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__valoracionesClient<$Result.GetResult<Prisma.$valoracionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Valoraciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valoracionesFindFirstArgs} args - Arguments to find a Valoraciones
     * @example
     * // Get one Valoraciones
     * const valoraciones = await prisma.valoraciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends valoracionesFindFirstArgs>(args?: SelectSubset<T, valoracionesFindFirstArgs<ExtArgs>>): Prisma__valoracionesClient<$Result.GetResult<Prisma.$valoracionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Valoraciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valoracionesFindFirstOrThrowArgs} args - Arguments to find a Valoraciones
     * @example
     * // Get one Valoraciones
     * const valoraciones = await prisma.valoraciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends valoracionesFindFirstOrThrowArgs>(args?: SelectSubset<T, valoracionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__valoracionesClient<$Result.GetResult<Prisma.$valoracionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Valoraciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valoracionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Valoraciones
     * const valoraciones = await prisma.valoraciones.findMany()
     * 
     * // Get first 10 Valoraciones
     * const valoraciones = await prisma.valoraciones.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const valoracionesWithIdOnly = await prisma.valoraciones.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends valoracionesFindManyArgs>(args?: SelectSubset<T, valoracionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$valoracionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Valoraciones.
     * @param {valoracionesCreateArgs} args - Arguments to create a Valoraciones.
     * @example
     * // Create one Valoraciones
     * const Valoraciones = await prisma.valoraciones.create({
     *   data: {
     *     // ... data to create a Valoraciones
     *   }
     * })
     * 
     */
    create<T extends valoracionesCreateArgs>(args: SelectSubset<T, valoracionesCreateArgs<ExtArgs>>): Prisma__valoracionesClient<$Result.GetResult<Prisma.$valoracionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Valoraciones.
     * @param {valoracionesCreateManyArgs} args - Arguments to create many Valoraciones.
     * @example
     * // Create many Valoraciones
     * const valoraciones = await prisma.valoraciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends valoracionesCreateManyArgs>(args?: SelectSubset<T, valoracionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Valoraciones and returns the data saved in the database.
     * @param {valoracionesCreateManyAndReturnArgs} args - Arguments to create many Valoraciones.
     * @example
     * // Create many Valoraciones
     * const valoraciones = await prisma.valoraciones.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Valoraciones and only return the `id`
     * const valoracionesWithIdOnly = await prisma.valoraciones.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends valoracionesCreateManyAndReturnArgs>(args?: SelectSubset<T, valoracionesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$valoracionesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Valoraciones.
     * @param {valoracionesDeleteArgs} args - Arguments to delete one Valoraciones.
     * @example
     * // Delete one Valoraciones
     * const Valoraciones = await prisma.valoraciones.delete({
     *   where: {
     *     // ... filter to delete one Valoraciones
     *   }
     * })
     * 
     */
    delete<T extends valoracionesDeleteArgs>(args: SelectSubset<T, valoracionesDeleteArgs<ExtArgs>>): Prisma__valoracionesClient<$Result.GetResult<Prisma.$valoracionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Valoraciones.
     * @param {valoracionesUpdateArgs} args - Arguments to update one Valoraciones.
     * @example
     * // Update one Valoraciones
     * const valoraciones = await prisma.valoraciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends valoracionesUpdateArgs>(args: SelectSubset<T, valoracionesUpdateArgs<ExtArgs>>): Prisma__valoracionesClient<$Result.GetResult<Prisma.$valoracionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Valoraciones.
     * @param {valoracionesDeleteManyArgs} args - Arguments to filter Valoraciones to delete.
     * @example
     * // Delete a few Valoraciones
     * const { count } = await prisma.valoraciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends valoracionesDeleteManyArgs>(args?: SelectSubset<T, valoracionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Valoraciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valoracionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Valoraciones
     * const valoraciones = await prisma.valoraciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends valoracionesUpdateManyArgs>(args: SelectSubset<T, valoracionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Valoraciones and returns the data updated in the database.
     * @param {valoracionesUpdateManyAndReturnArgs} args - Arguments to update many Valoraciones.
     * @example
     * // Update many Valoraciones
     * const valoraciones = await prisma.valoraciones.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Valoraciones and only return the `id`
     * const valoracionesWithIdOnly = await prisma.valoraciones.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends valoracionesUpdateManyAndReturnArgs>(args: SelectSubset<T, valoracionesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$valoracionesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Valoraciones.
     * @param {valoracionesUpsertArgs} args - Arguments to update or create a Valoraciones.
     * @example
     * // Update or create a Valoraciones
     * const valoraciones = await prisma.valoraciones.upsert({
     *   create: {
     *     // ... data to create a Valoraciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Valoraciones we want to update
     *   }
     * })
     */
    upsert<T extends valoracionesUpsertArgs>(args: SelectSubset<T, valoracionesUpsertArgs<ExtArgs>>): Prisma__valoracionesClient<$Result.GetResult<Prisma.$valoracionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Valoraciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valoracionesCountArgs} args - Arguments to filter Valoraciones to count.
     * @example
     * // Count the number of Valoraciones
     * const count = await prisma.valoraciones.count({
     *   where: {
     *     // ... the filter for the Valoraciones we want to count
     *   }
     * })
    **/
    count<T extends valoracionesCountArgs>(
      args?: Subset<T, valoracionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValoracionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Valoraciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValoracionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ValoracionesAggregateArgs>(args: Subset<T, ValoracionesAggregateArgs>): Prisma.PrismaPromise<GetValoracionesAggregateType<T>>

    /**
     * Group by Valoraciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {valoracionesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends valoracionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: valoracionesGroupByArgs['orderBy'] }
        : { orderBy?: valoracionesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, valoracionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValoracionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the valoraciones model
   */
  readonly fields: valoracionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for valoraciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__valoracionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    citas<T extends citasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, citasDefaultArgs<ExtArgs>>): Prisma__citasClient<$Result.GetResult<Prisma.$citasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuarios_valoraciones_empleado_idTousuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuarios_valoraciones_psicologo_idTousuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the valoraciones model
   */
  interface valoracionesFieldRefs {
    readonly id: FieldRef<"valoraciones", 'String'>
    readonly empleado_id: FieldRef<"valoraciones", 'String'>
    readonly psicologo_id: FieldRef<"valoraciones", 'String'>
    readonly cita_id: FieldRef<"valoraciones", 'String'>
    readonly puntuacion: FieldRef<"valoraciones", 'Int'>
    readonly comentario: FieldRef<"valoraciones", 'String'>
    readonly creado_en: FieldRef<"valoraciones", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * valoraciones findUnique
   */
  export type valoracionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valoraciones
     */
    select?: valoracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the valoraciones
     */
    omit?: valoracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valoracionesInclude<ExtArgs> | null
    /**
     * Filter, which valoraciones to fetch.
     */
    where: valoracionesWhereUniqueInput
  }

  /**
   * valoraciones findUniqueOrThrow
   */
  export type valoracionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valoraciones
     */
    select?: valoracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the valoraciones
     */
    omit?: valoracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valoracionesInclude<ExtArgs> | null
    /**
     * Filter, which valoraciones to fetch.
     */
    where: valoracionesWhereUniqueInput
  }

  /**
   * valoraciones findFirst
   */
  export type valoracionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valoraciones
     */
    select?: valoracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the valoraciones
     */
    omit?: valoracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valoracionesInclude<ExtArgs> | null
    /**
     * Filter, which valoraciones to fetch.
     */
    where?: valoracionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of valoraciones to fetch.
     */
    orderBy?: valoracionesOrderByWithRelationInput | valoracionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for valoraciones.
     */
    cursor?: valoracionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` valoraciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` valoraciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of valoraciones.
     */
    distinct?: ValoracionesScalarFieldEnum | ValoracionesScalarFieldEnum[]
  }

  /**
   * valoraciones findFirstOrThrow
   */
  export type valoracionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valoraciones
     */
    select?: valoracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the valoraciones
     */
    omit?: valoracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valoracionesInclude<ExtArgs> | null
    /**
     * Filter, which valoraciones to fetch.
     */
    where?: valoracionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of valoraciones to fetch.
     */
    orderBy?: valoracionesOrderByWithRelationInput | valoracionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for valoraciones.
     */
    cursor?: valoracionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` valoraciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` valoraciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of valoraciones.
     */
    distinct?: ValoracionesScalarFieldEnum | ValoracionesScalarFieldEnum[]
  }

  /**
   * valoraciones findMany
   */
  export type valoracionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valoraciones
     */
    select?: valoracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the valoraciones
     */
    omit?: valoracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valoracionesInclude<ExtArgs> | null
    /**
     * Filter, which valoraciones to fetch.
     */
    where?: valoracionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of valoraciones to fetch.
     */
    orderBy?: valoracionesOrderByWithRelationInput | valoracionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing valoraciones.
     */
    cursor?: valoracionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` valoraciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` valoraciones.
     */
    skip?: number
    distinct?: ValoracionesScalarFieldEnum | ValoracionesScalarFieldEnum[]
  }

  /**
   * valoraciones create
   */
  export type valoracionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valoraciones
     */
    select?: valoracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the valoraciones
     */
    omit?: valoracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valoracionesInclude<ExtArgs> | null
    /**
     * The data needed to create a valoraciones.
     */
    data: XOR<valoracionesCreateInput, valoracionesUncheckedCreateInput>
  }

  /**
   * valoraciones createMany
   */
  export type valoracionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many valoraciones.
     */
    data: valoracionesCreateManyInput | valoracionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * valoraciones createManyAndReturn
   */
  export type valoracionesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valoraciones
     */
    select?: valoracionesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the valoraciones
     */
    omit?: valoracionesOmit<ExtArgs> | null
    /**
     * The data used to create many valoraciones.
     */
    data: valoracionesCreateManyInput | valoracionesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valoracionesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * valoraciones update
   */
  export type valoracionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valoraciones
     */
    select?: valoracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the valoraciones
     */
    omit?: valoracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valoracionesInclude<ExtArgs> | null
    /**
     * The data needed to update a valoraciones.
     */
    data: XOR<valoracionesUpdateInput, valoracionesUncheckedUpdateInput>
    /**
     * Choose, which valoraciones to update.
     */
    where: valoracionesWhereUniqueInput
  }

  /**
   * valoraciones updateMany
   */
  export type valoracionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update valoraciones.
     */
    data: XOR<valoracionesUpdateManyMutationInput, valoracionesUncheckedUpdateManyInput>
    /**
     * Filter which valoraciones to update
     */
    where?: valoracionesWhereInput
    /**
     * Limit how many valoraciones to update.
     */
    limit?: number
  }

  /**
   * valoraciones updateManyAndReturn
   */
  export type valoracionesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valoraciones
     */
    select?: valoracionesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the valoraciones
     */
    omit?: valoracionesOmit<ExtArgs> | null
    /**
     * The data used to update valoraciones.
     */
    data: XOR<valoracionesUpdateManyMutationInput, valoracionesUncheckedUpdateManyInput>
    /**
     * Filter which valoraciones to update
     */
    where?: valoracionesWhereInput
    /**
     * Limit how many valoraciones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valoracionesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * valoraciones upsert
   */
  export type valoracionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valoraciones
     */
    select?: valoracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the valoraciones
     */
    omit?: valoracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valoracionesInclude<ExtArgs> | null
    /**
     * The filter to search for the valoraciones to update in case it exists.
     */
    where: valoracionesWhereUniqueInput
    /**
     * In case the valoraciones found by the `where` argument doesn't exist, create a new valoraciones with this data.
     */
    create: XOR<valoracionesCreateInput, valoracionesUncheckedCreateInput>
    /**
     * In case the valoraciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<valoracionesUpdateInput, valoracionesUncheckedUpdateInput>
  }

  /**
   * valoraciones delete
   */
  export type valoracionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valoraciones
     */
    select?: valoracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the valoraciones
     */
    omit?: valoracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valoracionesInclude<ExtArgs> | null
    /**
     * Filter which valoraciones to delete.
     */
    where: valoracionesWhereUniqueInput
  }

  /**
   * valoraciones deleteMany
   */
  export type valoracionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which valoraciones to delete
     */
    where?: valoracionesWhereInput
    /**
     * Limit how many valoraciones to delete.
     */
    limit?: number
  }

  /**
   * valoraciones without action
   */
  export type valoracionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the valoraciones
     */
    select?: valoracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the valoraciones
     */
    omit?: valoracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: valoracionesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CheckinsScalarFieldEnum: {
    id: 'id',
    empleado_id: 'empleado_id',
    fecha: 'fecha',
    estado_animo: 'estado_animo',
    nivel_estres: 'nivel_estres',
    horas_sueno: 'horas_sueno',
    notas: 'notas',
    creado_en: 'creado_en'
  };

  export type CheckinsScalarFieldEnum = (typeof CheckinsScalarFieldEnum)[keyof typeof CheckinsScalarFieldEnum]


  export const CitasScalarFieldEnum: {
    id: 'id',
    empleado_id: 'empleado_id',
    psicologo_id: 'psicologo_id',
    fecha_hora: 'fecha_hora',
    duracion_minutos: 'duracion_minutos',
    estado: 'estado',
    notas: 'notas',
    link_reunion: 'link_reunion',
    creado_en: 'creado_en'
  };

  export type CitasScalarFieldEnum = (typeof CitasScalarFieldEnum)[keyof typeof CitasScalarFieldEnum]


  export const MensajesScalarFieldEnum: {
    id: 'id',
    remitente_id: 'remitente_id',
    destinatario_id: 'destinatario_id',
    contenido: 'contenido',
    leido: 'leido',
    creado_en: 'creado_en'
  };

  export type MensajesScalarFieldEnum = (typeof MensajesScalarFieldEnum)[keyof typeof MensajesScalarFieldEnum]


  export const PsicologosScalarFieldEnum: {
    id: 'id',
    numero_licencia: 'numero_licencia',
    especialidad: 'especialidad',
    a_os_experiencia: 'a_os_experiencia',
    biografia: 'biografia'
  };

  export type PsicologosScalarFieldEnum = (typeof PsicologosScalarFieldEnum)[keyof typeof PsicologosScalarFieldEnum]


  export const RecomendacionesScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    tipo: 'tipo',
    url: 'url',
    activo: 'activo',
    creado_en: 'creado_en'
  };

  export type RecomendacionesScalarFieldEnum = (typeof RecomendacionesScalarFieldEnum)[keyof typeof RecomendacionesScalarFieldEnum]


  export const Recomendaciones_empleadoScalarFieldEnum: {
    id: 'id',
    empleado_id: 'empleado_id',
    recomendacion_id: 'recomendacion_id',
    completado: 'completado',
    completado_en: 'completado_en',
    asignado_en: 'asignado_en'
  };

  export type Recomendaciones_empleadoScalarFieldEnum = (typeof Recomendaciones_empleadoScalarFieldEnum)[keyof typeof Recomendaciones_empleadoScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password_hash: 'password_hash',
    rol: 'rol',
    empresa: 'empresa',
    cargo: 'cargo',
    avatar_url: 'avatar_url',
    activo: 'activo',
    creado_en: 'creado_en'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const ValoracionesScalarFieldEnum: {
    id: 'id',
    empleado_id: 'empleado_id',
    psicologo_id: 'psicologo_id',
    cita_id: 'cita_id',
    puntuacion: 'puntuacion',
    comentario: 'comentario',
    creado_en: 'creado_en'
  };

  export type ValoracionesScalarFieldEnum = (typeof ValoracionesScalarFieldEnum)[keyof typeof ValoracionesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type checkinsWhereInput = {
    AND?: checkinsWhereInput | checkinsWhereInput[]
    OR?: checkinsWhereInput[]
    NOT?: checkinsWhereInput | checkinsWhereInput[]
    id?: UuidFilter<"checkins"> | string
    empleado_id?: UuidFilter<"checkins"> | string
    fecha?: DateTimeFilter<"checkins"> | Date | string
    estado_animo?: IntFilter<"checkins"> | number
    nivel_estres?: IntFilter<"checkins"> | number
    horas_sueno?: DecimalNullableFilter<"checkins"> | Decimal | DecimalJsLike | number | string | null
    notas?: StringNullableFilter<"checkins"> | string | null
    creado_en?: DateTimeNullableFilter<"checkins"> | Date | string | null
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type checkinsOrderByWithRelationInput = {
    id?: SortOrder
    empleado_id?: SortOrder
    fecha?: SortOrder
    estado_animo?: SortOrder
    nivel_estres?: SortOrder
    horas_sueno?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    creado_en?: SortOrderInput | SortOrder
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type checkinsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    empleado_id_fecha?: checkinsEmpleado_idFechaCompoundUniqueInput
    AND?: checkinsWhereInput | checkinsWhereInput[]
    OR?: checkinsWhereInput[]
    NOT?: checkinsWhereInput | checkinsWhereInput[]
    empleado_id?: UuidFilter<"checkins"> | string
    fecha?: DateTimeFilter<"checkins"> | Date | string
    estado_animo?: IntFilter<"checkins"> | number
    nivel_estres?: IntFilter<"checkins"> | number
    horas_sueno?: DecimalNullableFilter<"checkins"> | Decimal | DecimalJsLike | number | string | null
    notas?: StringNullableFilter<"checkins"> | string | null
    creado_en?: DateTimeNullableFilter<"checkins"> | Date | string | null
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "id" | "empleado_id_fecha">

  export type checkinsOrderByWithAggregationInput = {
    id?: SortOrder
    empleado_id?: SortOrder
    fecha?: SortOrder
    estado_animo?: SortOrder
    nivel_estres?: SortOrder
    horas_sueno?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    creado_en?: SortOrderInput | SortOrder
    _count?: checkinsCountOrderByAggregateInput
    _avg?: checkinsAvgOrderByAggregateInput
    _max?: checkinsMaxOrderByAggregateInput
    _min?: checkinsMinOrderByAggregateInput
    _sum?: checkinsSumOrderByAggregateInput
  }

  export type checkinsScalarWhereWithAggregatesInput = {
    AND?: checkinsScalarWhereWithAggregatesInput | checkinsScalarWhereWithAggregatesInput[]
    OR?: checkinsScalarWhereWithAggregatesInput[]
    NOT?: checkinsScalarWhereWithAggregatesInput | checkinsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"checkins"> | string
    empleado_id?: UuidWithAggregatesFilter<"checkins"> | string
    fecha?: DateTimeWithAggregatesFilter<"checkins"> | Date | string
    estado_animo?: IntWithAggregatesFilter<"checkins"> | number
    nivel_estres?: IntWithAggregatesFilter<"checkins"> | number
    horas_sueno?: DecimalNullableWithAggregatesFilter<"checkins"> | Decimal | DecimalJsLike | number | string | null
    notas?: StringNullableWithAggregatesFilter<"checkins"> | string | null
    creado_en?: DateTimeNullableWithAggregatesFilter<"checkins"> | Date | string | null
  }

  export type citasWhereInput = {
    AND?: citasWhereInput | citasWhereInput[]
    OR?: citasWhereInput[]
    NOT?: citasWhereInput | citasWhereInput[]
    id?: UuidFilter<"citas"> | string
    empleado_id?: UuidFilter<"citas"> | string
    psicologo_id?: UuidFilter<"citas"> | string
    fecha_hora?: DateTimeFilter<"citas"> | Date | string
    duracion_minutos?: IntNullableFilter<"citas"> | number | null
    estado?: StringNullableFilter<"citas"> | string | null
    notas?: StringNullableFilter<"citas"> | string | null
    link_reunion?: StringNullableFilter<"citas"> | string | null
    creado_en?: DateTimeNullableFilter<"citas"> | Date | string | null
    usuarios_citas_empleado_idTousuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    usuarios_citas_psicologo_idTousuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    valoraciones?: ValoracionesListRelationFilter
  }

  export type citasOrderByWithRelationInput = {
    id?: SortOrder
    empleado_id?: SortOrder
    psicologo_id?: SortOrder
    fecha_hora?: SortOrder
    duracion_minutos?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    link_reunion?: SortOrderInput | SortOrder
    creado_en?: SortOrderInput | SortOrder
    usuarios_citas_empleado_idTousuarios?: usuariosOrderByWithRelationInput
    usuarios_citas_psicologo_idTousuarios?: usuariosOrderByWithRelationInput
    valoraciones?: valoracionesOrderByRelationAggregateInput
  }

  export type citasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: citasWhereInput | citasWhereInput[]
    OR?: citasWhereInput[]
    NOT?: citasWhereInput | citasWhereInput[]
    empleado_id?: UuidFilter<"citas"> | string
    psicologo_id?: UuidFilter<"citas"> | string
    fecha_hora?: DateTimeFilter<"citas"> | Date | string
    duracion_minutos?: IntNullableFilter<"citas"> | number | null
    estado?: StringNullableFilter<"citas"> | string | null
    notas?: StringNullableFilter<"citas"> | string | null
    link_reunion?: StringNullableFilter<"citas"> | string | null
    creado_en?: DateTimeNullableFilter<"citas"> | Date | string | null
    usuarios_citas_empleado_idTousuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    usuarios_citas_psicologo_idTousuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    valoraciones?: ValoracionesListRelationFilter
  }, "id">

  export type citasOrderByWithAggregationInput = {
    id?: SortOrder
    empleado_id?: SortOrder
    psicologo_id?: SortOrder
    fecha_hora?: SortOrder
    duracion_minutos?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    notas?: SortOrderInput | SortOrder
    link_reunion?: SortOrderInput | SortOrder
    creado_en?: SortOrderInput | SortOrder
    _count?: citasCountOrderByAggregateInput
    _avg?: citasAvgOrderByAggregateInput
    _max?: citasMaxOrderByAggregateInput
    _min?: citasMinOrderByAggregateInput
    _sum?: citasSumOrderByAggregateInput
  }

  export type citasScalarWhereWithAggregatesInput = {
    AND?: citasScalarWhereWithAggregatesInput | citasScalarWhereWithAggregatesInput[]
    OR?: citasScalarWhereWithAggregatesInput[]
    NOT?: citasScalarWhereWithAggregatesInput | citasScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"citas"> | string
    empleado_id?: UuidWithAggregatesFilter<"citas"> | string
    psicologo_id?: UuidWithAggregatesFilter<"citas"> | string
    fecha_hora?: DateTimeWithAggregatesFilter<"citas"> | Date | string
    duracion_minutos?: IntNullableWithAggregatesFilter<"citas"> | number | null
    estado?: StringNullableWithAggregatesFilter<"citas"> | string | null
    notas?: StringNullableWithAggregatesFilter<"citas"> | string | null
    link_reunion?: StringNullableWithAggregatesFilter<"citas"> | string | null
    creado_en?: DateTimeNullableWithAggregatesFilter<"citas"> | Date | string | null
  }

  export type mensajesWhereInput = {
    AND?: mensajesWhereInput | mensajesWhereInput[]
    OR?: mensajesWhereInput[]
    NOT?: mensajesWhereInput | mensajesWhereInput[]
    id?: UuidFilter<"mensajes"> | string
    remitente_id?: UuidFilter<"mensajes"> | string
    destinatario_id?: UuidFilter<"mensajes"> | string
    contenido?: StringFilter<"mensajes"> | string
    leido?: BoolNullableFilter<"mensajes"> | boolean | null
    creado_en?: DateTimeNullableFilter<"mensajes"> | Date | string | null
    usuarios_mensajes_destinatario_idTousuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    usuarios_mensajes_remitente_idTousuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type mensajesOrderByWithRelationInput = {
    id?: SortOrder
    remitente_id?: SortOrder
    destinatario_id?: SortOrder
    contenido?: SortOrder
    leido?: SortOrderInput | SortOrder
    creado_en?: SortOrderInput | SortOrder
    usuarios_mensajes_destinatario_idTousuarios?: usuariosOrderByWithRelationInput
    usuarios_mensajes_remitente_idTousuarios?: usuariosOrderByWithRelationInput
  }

  export type mensajesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: mensajesWhereInput | mensajesWhereInput[]
    OR?: mensajesWhereInput[]
    NOT?: mensajesWhereInput | mensajesWhereInput[]
    remitente_id?: UuidFilter<"mensajes"> | string
    destinatario_id?: UuidFilter<"mensajes"> | string
    contenido?: StringFilter<"mensajes"> | string
    leido?: BoolNullableFilter<"mensajes"> | boolean | null
    creado_en?: DateTimeNullableFilter<"mensajes"> | Date | string | null
    usuarios_mensajes_destinatario_idTousuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    usuarios_mensajes_remitente_idTousuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "id">

  export type mensajesOrderByWithAggregationInput = {
    id?: SortOrder
    remitente_id?: SortOrder
    destinatario_id?: SortOrder
    contenido?: SortOrder
    leido?: SortOrderInput | SortOrder
    creado_en?: SortOrderInput | SortOrder
    _count?: mensajesCountOrderByAggregateInput
    _max?: mensajesMaxOrderByAggregateInput
    _min?: mensajesMinOrderByAggregateInput
  }

  export type mensajesScalarWhereWithAggregatesInput = {
    AND?: mensajesScalarWhereWithAggregatesInput | mensajesScalarWhereWithAggregatesInput[]
    OR?: mensajesScalarWhereWithAggregatesInput[]
    NOT?: mensajesScalarWhereWithAggregatesInput | mensajesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"mensajes"> | string
    remitente_id?: UuidWithAggregatesFilter<"mensajes"> | string
    destinatario_id?: UuidWithAggregatesFilter<"mensajes"> | string
    contenido?: StringWithAggregatesFilter<"mensajes"> | string
    leido?: BoolNullableWithAggregatesFilter<"mensajes"> | boolean | null
    creado_en?: DateTimeNullableWithAggregatesFilter<"mensajes"> | Date | string | null
  }

  export type psicologosWhereInput = {
    AND?: psicologosWhereInput | psicologosWhereInput[]
    OR?: psicologosWhereInput[]
    NOT?: psicologosWhereInput | psicologosWhereInput[]
    id?: UuidFilter<"psicologos"> | string
    numero_licencia?: StringFilter<"psicologos"> | string
    especialidad?: StringNullableFilter<"psicologos"> | string | null
    a_os_experiencia?: IntNullableFilter<"psicologos"> | number | null
    biografia?: StringNullableFilter<"psicologos"> | string | null
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type psicologosOrderByWithRelationInput = {
    id?: SortOrder
    numero_licencia?: SortOrder
    especialidad?: SortOrderInput | SortOrder
    a_os_experiencia?: SortOrderInput | SortOrder
    biografia?: SortOrderInput | SortOrder
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type psicologosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: psicologosWhereInput | psicologosWhereInput[]
    OR?: psicologosWhereInput[]
    NOT?: psicologosWhereInput | psicologosWhereInput[]
    numero_licencia?: StringFilter<"psicologos"> | string
    especialidad?: StringNullableFilter<"psicologos"> | string | null
    a_os_experiencia?: IntNullableFilter<"psicologos"> | number | null
    biografia?: StringNullableFilter<"psicologos"> | string | null
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "id">

  export type psicologosOrderByWithAggregationInput = {
    id?: SortOrder
    numero_licencia?: SortOrder
    especialidad?: SortOrderInput | SortOrder
    a_os_experiencia?: SortOrderInput | SortOrder
    biografia?: SortOrderInput | SortOrder
    _count?: psicologosCountOrderByAggregateInput
    _avg?: psicologosAvgOrderByAggregateInput
    _max?: psicologosMaxOrderByAggregateInput
    _min?: psicologosMinOrderByAggregateInput
    _sum?: psicologosSumOrderByAggregateInput
  }

  export type psicologosScalarWhereWithAggregatesInput = {
    AND?: psicologosScalarWhereWithAggregatesInput | psicologosScalarWhereWithAggregatesInput[]
    OR?: psicologosScalarWhereWithAggregatesInput[]
    NOT?: psicologosScalarWhereWithAggregatesInput | psicologosScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"psicologos"> | string
    numero_licencia?: StringWithAggregatesFilter<"psicologos"> | string
    especialidad?: StringNullableWithAggregatesFilter<"psicologos"> | string | null
    a_os_experiencia?: IntNullableWithAggregatesFilter<"psicologos"> | number | null
    biografia?: StringNullableWithAggregatesFilter<"psicologos"> | string | null
  }

  export type recomendacionesWhereInput = {
    AND?: recomendacionesWhereInput | recomendacionesWhereInput[]
    OR?: recomendacionesWhereInput[]
    NOT?: recomendacionesWhereInput | recomendacionesWhereInput[]
    id?: UuidFilter<"recomendaciones"> | string
    titulo?: StringFilter<"recomendaciones"> | string
    descripcion?: StringNullableFilter<"recomendaciones"> | string | null
    tipo?: StringNullableFilter<"recomendaciones"> | string | null
    url?: StringNullableFilter<"recomendaciones"> | string | null
    activo?: BoolNullableFilter<"recomendaciones"> | boolean | null
    creado_en?: DateTimeNullableFilter<"recomendaciones"> | Date | string | null
    recomendaciones_empleado?: Recomendaciones_empleadoListRelationFilter
  }

  export type recomendacionesOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    creado_en?: SortOrderInput | SortOrder
    recomendaciones_empleado?: recomendaciones_empleadoOrderByRelationAggregateInput
  }

  export type recomendacionesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: recomendacionesWhereInput | recomendacionesWhereInput[]
    OR?: recomendacionesWhereInput[]
    NOT?: recomendacionesWhereInput | recomendacionesWhereInput[]
    titulo?: StringFilter<"recomendaciones"> | string
    descripcion?: StringNullableFilter<"recomendaciones"> | string | null
    tipo?: StringNullableFilter<"recomendaciones"> | string | null
    url?: StringNullableFilter<"recomendaciones"> | string | null
    activo?: BoolNullableFilter<"recomendaciones"> | boolean | null
    creado_en?: DateTimeNullableFilter<"recomendaciones"> | Date | string | null
    recomendaciones_empleado?: Recomendaciones_empleadoListRelationFilter
  }, "id">

  export type recomendacionesOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    creado_en?: SortOrderInput | SortOrder
    _count?: recomendacionesCountOrderByAggregateInput
    _max?: recomendacionesMaxOrderByAggregateInput
    _min?: recomendacionesMinOrderByAggregateInput
  }

  export type recomendacionesScalarWhereWithAggregatesInput = {
    AND?: recomendacionesScalarWhereWithAggregatesInput | recomendacionesScalarWhereWithAggregatesInput[]
    OR?: recomendacionesScalarWhereWithAggregatesInput[]
    NOT?: recomendacionesScalarWhereWithAggregatesInput | recomendacionesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"recomendaciones"> | string
    titulo?: StringWithAggregatesFilter<"recomendaciones"> | string
    descripcion?: StringNullableWithAggregatesFilter<"recomendaciones"> | string | null
    tipo?: StringNullableWithAggregatesFilter<"recomendaciones"> | string | null
    url?: StringNullableWithAggregatesFilter<"recomendaciones"> | string | null
    activo?: BoolNullableWithAggregatesFilter<"recomendaciones"> | boolean | null
    creado_en?: DateTimeNullableWithAggregatesFilter<"recomendaciones"> | Date | string | null
  }

  export type recomendaciones_empleadoWhereInput = {
    AND?: recomendaciones_empleadoWhereInput | recomendaciones_empleadoWhereInput[]
    OR?: recomendaciones_empleadoWhereInput[]
    NOT?: recomendaciones_empleadoWhereInput | recomendaciones_empleadoWhereInput[]
    id?: UuidFilter<"recomendaciones_empleado"> | string
    empleado_id?: UuidFilter<"recomendaciones_empleado"> | string
    recomendacion_id?: UuidFilter<"recomendaciones_empleado"> | string
    completado?: BoolNullableFilter<"recomendaciones_empleado"> | boolean | null
    completado_en?: DateTimeNullableFilter<"recomendaciones_empleado"> | Date | string | null
    asignado_en?: DateTimeNullableFilter<"recomendaciones_empleado"> | Date | string | null
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    recomendaciones?: XOR<RecomendacionesScalarRelationFilter, recomendacionesWhereInput>
  }

  export type recomendaciones_empleadoOrderByWithRelationInput = {
    id?: SortOrder
    empleado_id?: SortOrder
    recomendacion_id?: SortOrder
    completado?: SortOrderInput | SortOrder
    completado_en?: SortOrderInput | SortOrder
    asignado_en?: SortOrderInput | SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    recomendaciones?: recomendacionesOrderByWithRelationInput
  }

  export type recomendaciones_empleadoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: recomendaciones_empleadoWhereInput | recomendaciones_empleadoWhereInput[]
    OR?: recomendaciones_empleadoWhereInput[]
    NOT?: recomendaciones_empleadoWhereInput | recomendaciones_empleadoWhereInput[]
    empleado_id?: UuidFilter<"recomendaciones_empleado"> | string
    recomendacion_id?: UuidFilter<"recomendaciones_empleado"> | string
    completado?: BoolNullableFilter<"recomendaciones_empleado"> | boolean | null
    completado_en?: DateTimeNullableFilter<"recomendaciones_empleado"> | Date | string | null
    asignado_en?: DateTimeNullableFilter<"recomendaciones_empleado"> | Date | string | null
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    recomendaciones?: XOR<RecomendacionesScalarRelationFilter, recomendacionesWhereInput>
  }, "id">

  export type recomendaciones_empleadoOrderByWithAggregationInput = {
    id?: SortOrder
    empleado_id?: SortOrder
    recomendacion_id?: SortOrder
    completado?: SortOrderInput | SortOrder
    completado_en?: SortOrderInput | SortOrder
    asignado_en?: SortOrderInput | SortOrder
    _count?: recomendaciones_empleadoCountOrderByAggregateInput
    _max?: recomendaciones_empleadoMaxOrderByAggregateInput
    _min?: recomendaciones_empleadoMinOrderByAggregateInput
  }

  export type recomendaciones_empleadoScalarWhereWithAggregatesInput = {
    AND?: recomendaciones_empleadoScalarWhereWithAggregatesInput | recomendaciones_empleadoScalarWhereWithAggregatesInput[]
    OR?: recomendaciones_empleadoScalarWhereWithAggregatesInput[]
    NOT?: recomendaciones_empleadoScalarWhereWithAggregatesInput | recomendaciones_empleadoScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"recomendaciones_empleado"> | string
    empleado_id?: UuidWithAggregatesFilter<"recomendaciones_empleado"> | string
    recomendacion_id?: UuidWithAggregatesFilter<"recomendaciones_empleado"> | string
    completado?: BoolNullableWithAggregatesFilter<"recomendaciones_empleado"> | boolean | null
    completado_en?: DateTimeNullableWithAggregatesFilter<"recomendaciones_empleado"> | Date | string | null
    asignado_en?: DateTimeNullableWithAggregatesFilter<"recomendaciones_empleado"> | Date | string | null
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: UuidFilter<"usuarios"> | string
    nombre?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    password_hash?: StringFilter<"usuarios"> | string
    rol?: StringFilter<"usuarios"> | string
    empresa?: StringNullableFilter<"usuarios"> | string | null
    cargo?: StringNullableFilter<"usuarios"> | string | null
    avatar_url?: StringNullableFilter<"usuarios"> | string | null
    activo?: BoolNullableFilter<"usuarios"> | boolean | null
    creado_en?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    checkins?: CheckinsListRelationFilter
    citas_citas_empleado_idTousuarios?: CitasListRelationFilter
    citas_citas_psicologo_idTousuarios?: CitasListRelationFilter
    mensajes_mensajes_destinatario_idTousuarios?: MensajesListRelationFilter
    mensajes_mensajes_remitente_idTousuarios?: MensajesListRelationFilter
    psicologos?: XOR<PsicologosNullableScalarRelationFilter, psicologosWhereInput> | null
    recomendaciones_empleado?: Recomendaciones_empleadoListRelationFilter
    valoraciones_valoraciones_empleado_idTousuarios?: ValoracionesListRelationFilter
    valoraciones_valoraciones_psicologo_idTousuarios?: ValoracionesListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    rol?: SortOrder
    empresa?: SortOrderInput | SortOrder
    cargo?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    creado_en?: SortOrderInput | SortOrder
    checkins?: checkinsOrderByRelationAggregateInput
    citas_citas_empleado_idTousuarios?: citasOrderByRelationAggregateInput
    citas_citas_psicologo_idTousuarios?: citasOrderByRelationAggregateInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesOrderByRelationAggregateInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesOrderByRelationAggregateInput
    psicologos?: psicologosOrderByWithRelationInput
    recomendaciones_empleado?: recomendaciones_empleadoOrderByRelationAggregateInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesOrderByRelationAggregateInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesOrderByRelationAggregateInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nombre?: StringFilter<"usuarios"> | string
    password_hash?: StringFilter<"usuarios"> | string
    rol?: StringFilter<"usuarios"> | string
    empresa?: StringNullableFilter<"usuarios"> | string | null
    cargo?: StringNullableFilter<"usuarios"> | string | null
    avatar_url?: StringNullableFilter<"usuarios"> | string | null
    activo?: BoolNullableFilter<"usuarios"> | boolean | null
    creado_en?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    checkins?: CheckinsListRelationFilter
    citas_citas_empleado_idTousuarios?: CitasListRelationFilter
    citas_citas_psicologo_idTousuarios?: CitasListRelationFilter
    mensajes_mensajes_destinatario_idTousuarios?: MensajesListRelationFilter
    mensajes_mensajes_remitente_idTousuarios?: MensajesListRelationFilter
    psicologos?: XOR<PsicologosNullableScalarRelationFilter, psicologosWhereInput> | null
    recomendaciones_empleado?: Recomendaciones_empleadoListRelationFilter
    valoraciones_valoraciones_empleado_idTousuarios?: ValoracionesListRelationFilter
    valoraciones_valoraciones_psicologo_idTousuarios?: ValoracionesListRelationFilter
  }, "id" | "email">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    rol?: SortOrder
    empresa?: SortOrderInput | SortOrder
    cargo?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    creado_en?: SortOrderInput | SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"usuarios"> | string
    nombre?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringWithAggregatesFilter<"usuarios"> | string
    password_hash?: StringWithAggregatesFilter<"usuarios"> | string
    rol?: StringWithAggregatesFilter<"usuarios"> | string
    empresa?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    cargo?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    avatar_url?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    activo?: BoolNullableWithAggregatesFilter<"usuarios"> | boolean | null
    creado_en?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
  }

  export type valoracionesWhereInput = {
    AND?: valoracionesWhereInput | valoracionesWhereInput[]
    OR?: valoracionesWhereInput[]
    NOT?: valoracionesWhereInput | valoracionesWhereInput[]
    id?: UuidFilter<"valoraciones"> | string
    empleado_id?: UuidFilter<"valoraciones"> | string
    psicologo_id?: UuidFilter<"valoraciones"> | string
    cita_id?: UuidFilter<"valoraciones"> | string
    puntuacion?: IntFilter<"valoraciones"> | number
    comentario?: StringNullableFilter<"valoraciones"> | string | null
    creado_en?: DateTimeNullableFilter<"valoraciones"> | Date | string | null
    citas?: XOR<CitasScalarRelationFilter, citasWhereInput>
    usuarios_valoraciones_empleado_idTousuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    usuarios_valoraciones_psicologo_idTousuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type valoracionesOrderByWithRelationInput = {
    id?: SortOrder
    empleado_id?: SortOrder
    psicologo_id?: SortOrder
    cita_id?: SortOrder
    puntuacion?: SortOrder
    comentario?: SortOrderInput | SortOrder
    creado_en?: SortOrderInput | SortOrder
    citas?: citasOrderByWithRelationInput
    usuarios_valoraciones_empleado_idTousuarios?: usuariosOrderByWithRelationInput
    usuarios_valoraciones_psicologo_idTousuarios?: usuariosOrderByWithRelationInput
  }

  export type valoracionesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    empleado_id_cita_id?: valoracionesEmpleado_idCita_idCompoundUniqueInput
    AND?: valoracionesWhereInput | valoracionesWhereInput[]
    OR?: valoracionesWhereInput[]
    NOT?: valoracionesWhereInput | valoracionesWhereInput[]
    empleado_id?: UuidFilter<"valoraciones"> | string
    psicologo_id?: UuidFilter<"valoraciones"> | string
    cita_id?: UuidFilter<"valoraciones"> | string
    puntuacion?: IntFilter<"valoraciones"> | number
    comentario?: StringNullableFilter<"valoraciones"> | string | null
    creado_en?: DateTimeNullableFilter<"valoraciones"> | Date | string | null
    citas?: XOR<CitasScalarRelationFilter, citasWhereInput>
    usuarios_valoraciones_empleado_idTousuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    usuarios_valoraciones_psicologo_idTousuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "id" | "empleado_id_cita_id">

  export type valoracionesOrderByWithAggregationInput = {
    id?: SortOrder
    empleado_id?: SortOrder
    psicologo_id?: SortOrder
    cita_id?: SortOrder
    puntuacion?: SortOrder
    comentario?: SortOrderInput | SortOrder
    creado_en?: SortOrderInput | SortOrder
    _count?: valoracionesCountOrderByAggregateInput
    _avg?: valoracionesAvgOrderByAggregateInput
    _max?: valoracionesMaxOrderByAggregateInput
    _min?: valoracionesMinOrderByAggregateInput
    _sum?: valoracionesSumOrderByAggregateInput
  }

  export type valoracionesScalarWhereWithAggregatesInput = {
    AND?: valoracionesScalarWhereWithAggregatesInput | valoracionesScalarWhereWithAggregatesInput[]
    OR?: valoracionesScalarWhereWithAggregatesInput[]
    NOT?: valoracionesScalarWhereWithAggregatesInput | valoracionesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"valoraciones"> | string
    empleado_id?: UuidWithAggregatesFilter<"valoraciones"> | string
    psicologo_id?: UuidWithAggregatesFilter<"valoraciones"> | string
    cita_id?: UuidWithAggregatesFilter<"valoraciones"> | string
    puntuacion?: IntWithAggregatesFilter<"valoraciones"> | number
    comentario?: StringNullableWithAggregatesFilter<"valoraciones"> | string | null
    creado_en?: DateTimeNullableWithAggregatesFilter<"valoraciones"> | Date | string | null
  }

  export type checkinsCreateInput = {
    id?: string
    fecha?: Date | string
    estado_animo: number
    nivel_estres: number
    horas_sueno?: Decimal | DecimalJsLike | number | string | null
    notas?: string | null
    creado_en?: Date | string | null
    usuarios: usuariosCreateNestedOneWithoutCheckinsInput
  }

  export type checkinsUncheckedCreateInput = {
    id?: string
    empleado_id: string
    fecha?: Date | string
    estado_animo: number
    nivel_estres: number
    horas_sueno?: Decimal | DecimalJsLike | number | string | null
    notas?: string | null
    creado_en?: Date | string | null
  }

  export type checkinsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_animo?: IntFieldUpdateOperationsInput | number
    nivel_estres?: IntFieldUpdateOperationsInput | number
    horas_sueno?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios?: usuariosUpdateOneRequiredWithoutCheckinsNestedInput
  }

  export type checkinsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    empleado_id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_animo?: IntFieldUpdateOperationsInput | number
    nivel_estres?: IntFieldUpdateOperationsInput | number
    horas_sueno?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type checkinsCreateManyInput = {
    id?: string
    empleado_id: string
    fecha?: Date | string
    estado_animo: number
    nivel_estres: number
    horas_sueno?: Decimal | DecimalJsLike | number | string | null
    notas?: string | null
    creado_en?: Date | string | null
  }

  export type checkinsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_animo?: IntFieldUpdateOperationsInput | number
    nivel_estres?: IntFieldUpdateOperationsInput | number
    horas_sueno?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type checkinsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    empleado_id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_animo?: IntFieldUpdateOperationsInput | number
    nivel_estres?: IntFieldUpdateOperationsInput | number
    horas_sueno?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type citasCreateInput = {
    id?: string
    fecha_hora: Date | string
    duracion_minutos?: number | null
    estado?: string | null
    notas?: string | null
    link_reunion?: string | null
    creado_en?: Date | string | null
    usuarios_citas_empleado_idTousuarios: usuariosCreateNestedOneWithoutCitas_citas_empleado_idTousuariosInput
    usuarios_citas_psicologo_idTousuarios: usuariosCreateNestedOneWithoutCitas_citas_psicologo_idTousuariosInput
    valoraciones?: valoracionesCreateNestedManyWithoutCitasInput
  }

  export type citasUncheckedCreateInput = {
    id?: string
    empleado_id: string
    psicologo_id: string
    fecha_hora: Date | string
    duracion_minutos?: number | null
    estado?: string | null
    notas?: string | null
    link_reunion?: string | null
    creado_en?: Date | string | null
    valoraciones?: valoracionesUncheckedCreateNestedManyWithoutCitasInput
  }

  export type citasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    duracion_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios_citas_empleado_idTousuarios?: usuariosUpdateOneRequiredWithoutCitas_citas_empleado_idTousuariosNestedInput
    usuarios_citas_psicologo_idTousuarios?: usuariosUpdateOneRequiredWithoutCitas_citas_psicologo_idTousuariosNestedInput
    valoraciones?: valoracionesUpdateManyWithoutCitasNestedInput
  }

  export type citasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    empleado_id?: StringFieldUpdateOperationsInput | string
    psicologo_id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    duracion_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valoraciones?: valoracionesUncheckedUpdateManyWithoutCitasNestedInput
  }

  export type citasCreateManyInput = {
    id?: string
    empleado_id: string
    psicologo_id: string
    fecha_hora: Date | string
    duracion_minutos?: number | null
    estado?: string | null
    notas?: string | null
    link_reunion?: string | null
    creado_en?: Date | string | null
  }

  export type citasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    duracion_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type citasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    empleado_id?: StringFieldUpdateOperationsInput | string
    psicologo_id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    duracion_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mensajesCreateInput = {
    id?: string
    contenido: string
    leido?: boolean | null
    creado_en?: Date | string | null
    usuarios_mensajes_destinatario_idTousuarios: usuariosCreateNestedOneWithoutMensajes_mensajes_destinatario_idTousuariosInput
    usuarios_mensajes_remitente_idTousuarios: usuariosCreateNestedOneWithoutMensajes_mensajes_remitente_idTousuariosInput
  }

  export type mensajesUncheckedCreateInput = {
    id?: string
    remitente_id: string
    destinatario_id: string
    contenido: string
    leido?: boolean | null
    creado_en?: Date | string | null
  }

  export type mensajesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios_mensajes_destinatario_idTousuarios?: usuariosUpdateOneRequiredWithoutMensajes_mensajes_destinatario_idTousuariosNestedInput
    usuarios_mensajes_remitente_idTousuarios?: usuariosUpdateOneRequiredWithoutMensajes_mensajes_remitente_idTousuariosNestedInput
  }

  export type mensajesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    remitente_id?: StringFieldUpdateOperationsInput | string
    destinatario_id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mensajesCreateManyInput = {
    id?: string
    remitente_id: string
    destinatario_id: string
    contenido: string
    leido?: boolean | null
    creado_en?: Date | string | null
  }

  export type mensajesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mensajesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    remitente_id?: StringFieldUpdateOperationsInput | string
    destinatario_id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type psicologosCreateInput = {
    numero_licencia: string
    especialidad?: string | null
    a_os_experiencia?: number | null
    biografia?: string | null
    usuarios: usuariosCreateNestedOneWithoutPsicologosInput
  }

  export type psicologosUncheckedCreateInput = {
    id: string
    numero_licencia: string
    especialidad?: string | null
    a_os_experiencia?: number | null
    biografia?: string | null
  }

  export type psicologosUpdateInput = {
    numero_licencia?: StringFieldUpdateOperationsInput | string
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    a_os_experiencia?: NullableIntFieldUpdateOperationsInput | number | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: usuariosUpdateOneRequiredWithoutPsicologosNestedInput
  }

  export type psicologosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero_licencia?: StringFieldUpdateOperationsInput | string
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    a_os_experiencia?: NullableIntFieldUpdateOperationsInput | number | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type psicologosCreateManyInput = {
    id: string
    numero_licencia: string
    especialidad?: string | null
    a_os_experiencia?: number | null
    biografia?: string | null
  }

  export type psicologosUpdateManyMutationInput = {
    numero_licencia?: StringFieldUpdateOperationsInput | string
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    a_os_experiencia?: NullableIntFieldUpdateOperationsInput | number | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type psicologosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero_licencia?: StringFieldUpdateOperationsInput | string
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    a_os_experiencia?: NullableIntFieldUpdateOperationsInput | number | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type recomendacionesCreateInput = {
    id?: string
    titulo: string
    descripcion?: string | null
    tipo?: string | null
    url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    recomendaciones_empleado?: recomendaciones_empleadoCreateNestedManyWithoutRecomendacionesInput
  }

  export type recomendacionesUncheckedCreateInput = {
    id?: string
    titulo: string
    descripcion?: string | null
    tipo?: string | null
    url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    recomendaciones_empleado?: recomendaciones_empleadoUncheckedCreateNestedManyWithoutRecomendacionesInput
  }

  export type recomendacionesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recomendaciones_empleado?: recomendaciones_empleadoUpdateManyWithoutRecomendacionesNestedInput
  }

  export type recomendacionesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recomendaciones_empleado?: recomendaciones_empleadoUncheckedUpdateManyWithoutRecomendacionesNestedInput
  }

  export type recomendacionesCreateManyInput = {
    id?: string
    titulo: string
    descripcion?: string | null
    tipo?: string | null
    url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
  }

  export type recomendacionesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recomendacionesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recomendaciones_empleadoCreateInput = {
    id?: string
    completado?: boolean | null
    completado_en?: Date | string | null
    asignado_en?: Date | string | null
    usuarios: usuariosCreateNestedOneWithoutRecomendaciones_empleadoInput
    recomendaciones: recomendacionesCreateNestedOneWithoutRecomendaciones_empleadoInput
  }

  export type recomendaciones_empleadoUncheckedCreateInput = {
    id?: string
    empleado_id: string
    recomendacion_id: string
    completado?: boolean | null
    completado_en?: Date | string | null
    asignado_en?: Date | string | null
  }

  export type recomendaciones_empleadoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asignado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios?: usuariosUpdateOneRequiredWithoutRecomendaciones_empleadoNestedInput
    recomendaciones?: recomendacionesUpdateOneRequiredWithoutRecomendaciones_empleadoNestedInput
  }

  export type recomendaciones_empleadoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    empleado_id?: StringFieldUpdateOperationsInput | string
    recomendacion_id?: StringFieldUpdateOperationsInput | string
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asignado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recomendaciones_empleadoCreateManyInput = {
    id?: string
    empleado_id: string
    recomendacion_id: string
    completado?: boolean | null
    completado_en?: Date | string | null
    asignado_en?: Date | string | null
  }

  export type recomendaciones_empleadoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asignado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recomendaciones_empleadoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    empleado_id?: StringFieldUpdateOperationsInput | string
    recomendacion_id?: StringFieldUpdateOperationsInput | string
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asignado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosCreateInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    checkins?: checkinsCreateNestedManyWithoutUsuariosInput
    citas_citas_empleado_idTousuarios?: citasCreateNestedManyWithoutUsuarios_citas_empleado_idTousuariosInput
    citas_citas_psicologo_idTousuarios?: citasCreateNestedManyWithoutUsuarios_citas_psicologo_idTousuariosInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesCreateNestedManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesCreateNestedManyWithoutUsuarios_mensajes_remitente_idTousuariosInput
    psicologos?: psicologosCreateNestedOneWithoutUsuariosInput
    recomendaciones_empleado?: recomendaciones_empleadoCreateNestedManyWithoutUsuariosInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesCreateNestedManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesCreateNestedManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    checkins?: checkinsUncheckedCreateNestedManyWithoutUsuariosInput
    citas_citas_empleado_idTousuarios?: citasUncheckedCreateNestedManyWithoutUsuarios_citas_empleado_idTousuariosInput
    citas_citas_psicologo_idTousuarios?: citasUncheckedCreateNestedManyWithoutUsuarios_citas_psicologo_idTousuariosInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUncheckedCreateNestedManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUncheckedCreateNestedManyWithoutUsuarios_mensajes_remitente_idTousuariosInput
    psicologos?: psicologosUncheckedCreateNestedOneWithoutUsuariosInput
    recomendaciones_empleado?: recomendaciones_empleadoUncheckedCreateNestedManyWithoutUsuariosInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUncheckedCreateNestedManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUncheckedCreateNestedManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput
  }

  export type usuariosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkins?: checkinsUpdateManyWithoutUsuariosNestedInput
    citas_citas_empleado_idTousuarios?: citasUpdateManyWithoutUsuarios_citas_empleado_idTousuariosNestedInput
    citas_citas_psicologo_idTousuarios?: citasUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosNestedInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosNestedInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosNestedInput
    psicologos?: psicologosUpdateOneWithoutUsuariosNestedInput
    recomendaciones_empleado?: recomendaciones_empleadoUpdateManyWithoutUsuariosNestedInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosNestedInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkins?: checkinsUncheckedUpdateManyWithoutUsuariosNestedInput
    citas_citas_empleado_idTousuarios?: citasUncheckedUpdateManyWithoutUsuarios_citas_empleado_idTousuariosNestedInput
    citas_citas_psicologo_idTousuarios?: citasUncheckedUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosNestedInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosNestedInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosNestedInput
    psicologos?: psicologosUncheckedUpdateOneWithoutUsuariosNestedInput
    recomendaciones_empleado?: recomendaciones_empleadoUncheckedUpdateManyWithoutUsuariosNestedInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosNestedInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
  }

  export type usuariosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type valoracionesCreateInput = {
    id?: string
    puntuacion: number
    comentario?: string | null
    creado_en?: Date | string | null
    citas: citasCreateNestedOneWithoutValoracionesInput
    usuarios_valoraciones_empleado_idTousuarios: usuariosCreateNestedOneWithoutValoraciones_valoraciones_empleado_idTousuariosInput
    usuarios_valoraciones_psicologo_idTousuarios: usuariosCreateNestedOneWithoutValoraciones_valoraciones_psicologo_idTousuariosInput
  }

  export type valoracionesUncheckedCreateInput = {
    id?: string
    empleado_id: string
    psicologo_id: string
    cita_id: string
    puntuacion: number
    comentario?: string | null
    creado_en?: Date | string | null
  }

  export type valoracionesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    puntuacion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    citas?: citasUpdateOneRequiredWithoutValoracionesNestedInput
    usuarios_valoraciones_empleado_idTousuarios?: usuariosUpdateOneRequiredWithoutValoraciones_valoraciones_empleado_idTousuariosNestedInput
    usuarios_valoraciones_psicologo_idTousuarios?: usuariosUpdateOneRequiredWithoutValoraciones_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type valoracionesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    empleado_id?: StringFieldUpdateOperationsInput | string
    psicologo_id?: StringFieldUpdateOperationsInput | string
    cita_id?: StringFieldUpdateOperationsInput | string
    puntuacion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type valoracionesCreateManyInput = {
    id?: string
    empleado_id: string
    psicologo_id: string
    cita_id: string
    puntuacion: number
    comentario?: string | null
    creado_en?: Date | string | null
  }

  export type valoracionesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    puntuacion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type valoracionesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    empleado_id?: StringFieldUpdateOperationsInput | string
    psicologo_id?: StringFieldUpdateOperationsInput | string
    cita_id?: StringFieldUpdateOperationsInput | string
    puntuacion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type checkinsEmpleado_idFechaCompoundUniqueInput = {
    empleado_id: string
    fecha: Date | string
  }

  export type checkinsCountOrderByAggregateInput = {
    id?: SortOrder
    empleado_id?: SortOrder
    fecha?: SortOrder
    estado_animo?: SortOrder
    nivel_estres?: SortOrder
    horas_sueno?: SortOrder
    notas?: SortOrder
    creado_en?: SortOrder
  }

  export type checkinsAvgOrderByAggregateInput = {
    estado_animo?: SortOrder
    nivel_estres?: SortOrder
    horas_sueno?: SortOrder
  }

  export type checkinsMaxOrderByAggregateInput = {
    id?: SortOrder
    empleado_id?: SortOrder
    fecha?: SortOrder
    estado_animo?: SortOrder
    nivel_estres?: SortOrder
    horas_sueno?: SortOrder
    notas?: SortOrder
    creado_en?: SortOrder
  }

  export type checkinsMinOrderByAggregateInput = {
    id?: SortOrder
    empleado_id?: SortOrder
    fecha?: SortOrder
    estado_animo?: SortOrder
    nivel_estres?: SortOrder
    horas_sueno?: SortOrder
    notas?: SortOrder
    creado_en?: SortOrder
  }

  export type checkinsSumOrderByAggregateInput = {
    estado_animo?: SortOrder
    nivel_estres?: SortOrder
    horas_sueno?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ValoracionesListRelationFilter = {
    every?: valoracionesWhereInput
    some?: valoracionesWhereInput
    none?: valoracionesWhereInput
  }

  export type valoracionesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type citasCountOrderByAggregateInput = {
    id?: SortOrder
    empleado_id?: SortOrder
    psicologo_id?: SortOrder
    fecha_hora?: SortOrder
    duracion_minutos?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
    link_reunion?: SortOrder
    creado_en?: SortOrder
  }

  export type citasAvgOrderByAggregateInput = {
    duracion_minutos?: SortOrder
  }

  export type citasMaxOrderByAggregateInput = {
    id?: SortOrder
    empleado_id?: SortOrder
    psicologo_id?: SortOrder
    fecha_hora?: SortOrder
    duracion_minutos?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
    link_reunion?: SortOrder
    creado_en?: SortOrder
  }

  export type citasMinOrderByAggregateInput = {
    id?: SortOrder
    empleado_id?: SortOrder
    psicologo_id?: SortOrder
    fecha_hora?: SortOrder
    duracion_minutos?: SortOrder
    estado?: SortOrder
    notas?: SortOrder
    link_reunion?: SortOrder
    creado_en?: SortOrder
  }

  export type citasSumOrderByAggregateInput = {
    duracion_minutos?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type mensajesCountOrderByAggregateInput = {
    id?: SortOrder
    remitente_id?: SortOrder
    destinatario_id?: SortOrder
    contenido?: SortOrder
    leido?: SortOrder
    creado_en?: SortOrder
  }

  export type mensajesMaxOrderByAggregateInput = {
    id?: SortOrder
    remitente_id?: SortOrder
    destinatario_id?: SortOrder
    contenido?: SortOrder
    leido?: SortOrder
    creado_en?: SortOrder
  }

  export type mensajesMinOrderByAggregateInput = {
    id?: SortOrder
    remitente_id?: SortOrder
    destinatario_id?: SortOrder
    contenido?: SortOrder
    leido?: SortOrder
    creado_en?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type psicologosCountOrderByAggregateInput = {
    id?: SortOrder
    numero_licencia?: SortOrder
    especialidad?: SortOrder
    a_os_experiencia?: SortOrder
    biografia?: SortOrder
  }

  export type psicologosAvgOrderByAggregateInput = {
    a_os_experiencia?: SortOrder
  }

  export type psicologosMaxOrderByAggregateInput = {
    id?: SortOrder
    numero_licencia?: SortOrder
    especialidad?: SortOrder
    a_os_experiencia?: SortOrder
    biografia?: SortOrder
  }

  export type psicologosMinOrderByAggregateInput = {
    id?: SortOrder
    numero_licencia?: SortOrder
    especialidad?: SortOrder
    a_os_experiencia?: SortOrder
    biografia?: SortOrder
  }

  export type psicologosSumOrderByAggregateInput = {
    a_os_experiencia?: SortOrder
  }

  export type Recomendaciones_empleadoListRelationFilter = {
    every?: recomendaciones_empleadoWhereInput
    some?: recomendaciones_empleadoWhereInput
    none?: recomendaciones_empleadoWhereInput
  }

  export type recomendaciones_empleadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type recomendacionesCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    tipo?: SortOrder
    url?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
  }

  export type recomendacionesMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    tipo?: SortOrder
    url?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
  }

  export type recomendacionesMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    tipo?: SortOrder
    url?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
  }

  export type RecomendacionesScalarRelationFilter = {
    is?: recomendacionesWhereInput
    isNot?: recomendacionesWhereInput
  }

  export type recomendaciones_empleadoCountOrderByAggregateInput = {
    id?: SortOrder
    empleado_id?: SortOrder
    recomendacion_id?: SortOrder
    completado?: SortOrder
    completado_en?: SortOrder
    asignado_en?: SortOrder
  }

  export type recomendaciones_empleadoMaxOrderByAggregateInput = {
    id?: SortOrder
    empleado_id?: SortOrder
    recomendacion_id?: SortOrder
    completado?: SortOrder
    completado_en?: SortOrder
    asignado_en?: SortOrder
  }

  export type recomendaciones_empleadoMinOrderByAggregateInput = {
    id?: SortOrder
    empleado_id?: SortOrder
    recomendacion_id?: SortOrder
    completado?: SortOrder
    completado_en?: SortOrder
    asignado_en?: SortOrder
  }

  export type CheckinsListRelationFilter = {
    every?: checkinsWhereInput
    some?: checkinsWhereInput
    none?: checkinsWhereInput
  }

  export type CitasListRelationFilter = {
    every?: citasWhereInput
    some?: citasWhereInput
    none?: citasWhereInput
  }

  export type MensajesListRelationFilter = {
    every?: mensajesWhereInput
    some?: mensajesWhereInput
    none?: mensajesWhereInput
  }

  export type PsicologosNullableScalarRelationFilter = {
    is?: psicologosWhereInput | null
    isNot?: psicologosWhereInput | null
  }

  export type checkinsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type citasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mensajesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    rol?: SortOrder
    empresa?: SortOrder
    cargo?: SortOrder
    avatar_url?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    rol?: SortOrder
    empresa?: SortOrder
    cargo?: SortOrder
    avatar_url?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    rol?: SortOrder
    empresa?: SortOrder
    cargo?: SortOrder
    avatar_url?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
  }

  export type CitasScalarRelationFilter = {
    is?: citasWhereInput
    isNot?: citasWhereInput
  }

  export type valoracionesEmpleado_idCita_idCompoundUniqueInput = {
    empleado_id: string
    cita_id: string
  }

  export type valoracionesCountOrderByAggregateInput = {
    id?: SortOrder
    empleado_id?: SortOrder
    psicologo_id?: SortOrder
    cita_id?: SortOrder
    puntuacion?: SortOrder
    comentario?: SortOrder
    creado_en?: SortOrder
  }

  export type valoracionesAvgOrderByAggregateInput = {
    puntuacion?: SortOrder
  }

  export type valoracionesMaxOrderByAggregateInput = {
    id?: SortOrder
    empleado_id?: SortOrder
    psicologo_id?: SortOrder
    cita_id?: SortOrder
    puntuacion?: SortOrder
    comentario?: SortOrder
    creado_en?: SortOrder
  }

  export type valoracionesMinOrderByAggregateInput = {
    id?: SortOrder
    empleado_id?: SortOrder
    psicologo_id?: SortOrder
    cita_id?: SortOrder
    puntuacion?: SortOrder
    comentario?: SortOrder
    creado_en?: SortOrder
  }

  export type valoracionesSumOrderByAggregateInput = {
    puntuacion?: SortOrder
  }

  export type usuariosCreateNestedOneWithoutCheckinsInput = {
    create?: XOR<usuariosCreateWithoutCheckinsInput, usuariosUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutCheckinsInput
    connect?: usuariosWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usuariosUpdateOneRequiredWithoutCheckinsNestedInput = {
    create?: XOR<usuariosCreateWithoutCheckinsInput, usuariosUncheckedCreateWithoutCheckinsInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutCheckinsInput
    upsert?: usuariosUpsertWithoutCheckinsInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutCheckinsInput, usuariosUpdateWithoutCheckinsInput>, usuariosUncheckedUpdateWithoutCheckinsInput>
  }

  export type usuariosCreateNestedOneWithoutCitas_citas_empleado_idTousuariosInput = {
    create?: XOR<usuariosCreateWithoutCitas_citas_empleado_idTousuariosInput, usuariosUncheckedCreateWithoutCitas_citas_empleado_idTousuariosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutCitas_citas_empleado_idTousuariosInput
    connect?: usuariosWhereUniqueInput
  }

  export type usuariosCreateNestedOneWithoutCitas_citas_psicologo_idTousuariosInput = {
    create?: XOR<usuariosCreateWithoutCitas_citas_psicologo_idTousuariosInput, usuariosUncheckedCreateWithoutCitas_citas_psicologo_idTousuariosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutCitas_citas_psicologo_idTousuariosInput
    connect?: usuariosWhereUniqueInput
  }

  export type valoracionesCreateNestedManyWithoutCitasInput = {
    create?: XOR<valoracionesCreateWithoutCitasInput, valoracionesUncheckedCreateWithoutCitasInput> | valoracionesCreateWithoutCitasInput[] | valoracionesUncheckedCreateWithoutCitasInput[]
    connectOrCreate?: valoracionesCreateOrConnectWithoutCitasInput | valoracionesCreateOrConnectWithoutCitasInput[]
    createMany?: valoracionesCreateManyCitasInputEnvelope
    connect?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
  }

  export type valoracionesUncheckedCreateNestedManyWithoutCitasInput = {
    create?: XOR<valoracionesCreateWithoutCitasInput, valoracionesUncheckedCreateWithoutCitasInput> | valoracionesCreateWithoutCitasInput[] | valoracionesUncheckedCreateWithoutCitasInput[]
    connectOrCreate?: valoracionesCreateOrConnectWithoutCitasInput | valoracionesCreateOrConnectWithoutCitasInput[]
    createMany?: valoracionesCreateManyCitasInputEnvelope
    connect?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usuariosUpdateOneRequiredWithoutCitas_citas_empleado_idTousuariosNestedInput = {
    create?: XOR<usuariosCreateWithoutCitas_citas_empleado_idTousuariosInput, usuariosUncheckedCreateWithoutCitas_citas_empleado_idTousuariosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutCitas_citas_empleado_idTousuariosInput
    upsert?: usuariosUpsertWithoutCitas_citas_empleado_idTousuariosInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutCitas_citas_empleado_idTousuariosInput, usuariosUpdateWithoutCitas_citas_empleado_idTousuariosInput>, usuariosUncheckedUpdateWithoutCitas_citas_empleado_idTousuariosInput>
  }

  export type usuariosUpdateOneRequiredWithoutCitas_citas_psicologo_idTousuariosNestedInput = {
    create?: XOR<usuariosCreateWithoutCitas_citas_psicologo_idTousuariosInput, usuariosUncheckedCreateWithoutCitas_citas_psicologo_idTousuariosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutCitas_citas_psicologo_idTousuariosInput
    upsert?: usuariosUpsertWithoutCitas_citas_psicologo_idTousuariosInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutCitas_citas_psicologo_idTousuariosInput, usuariosUpdateWithoutCitas_citas_psicologo_idTousuariosInput>, usuariosUncheckedUpdateWithoutCitas_citas_psicologo_idTousuariosInput>
  }

  export type valoracionesUpdateManyWithoutCitasNestedInput = {
    create?: XOR<valoracionesCreateWithoutCitasInput, valoracionesUncheckedCreateWithoutCitasInput> | valoracionesCreateWithoutCitasInput[] | valoracionesUncheckedCreateWithoutCitasInput[]
    connectOrCreate?: valoracionesCreateOrConnectWithoutCitasInput | valoracionesCreateOrConnectWithoutCitasInput[]
    upsert?: valoracionesUpsertWithWhereUniqueWithoutCitasInput | valoracionesUpsertWithWhereUniqueWithoutCitasInput[]
    createMany?: valoracionesCreateManyCitasInputEnvelope
    set?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    disconnect?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    delete?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    connect?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    update?: valoracionesUpdateWithWhereUniqueWithoutCitasInput | valoracionesUpdateWithWhereUniqueWithoutCitasInput[]
    updateMany?: valoracionesUpdateManyWithWhereWithoutCitasInput | valoracionesUpdateManyWithWhereWithoutCitasInput[]
    deleteMany?: valoracionesScalarWhereInput | valoracionesScalarWhereInput[]
  }

  export type valoracionesUncheckedUpdateManyWithoutCitasNestedInput = {
    create?: XOR<valoracionesCreateWithoutCitasInput, valoracionesUncheckedCreateWithoutCitasInput> | valoracionesCreateWithoutCitasInput[] | valoracionesUncheckedCreateWithoutCitasInput[]
    connectOrCreate?: valoracionesCreateOrConnectWithoutCitasInput | valoracionesCreateOrConnectWithoutCitasInput[]
    upsert?: valoracionesUpsertWithWhereUniqueWithoutCitasInput | valoracionesUpsertWithWhereUniqueWithoutCitasInput[]
    createMany?: valoracionesCreateManyCitasInputEnvelope
    set?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    disconnect?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    delete?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    connect?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    update?: valoracionesUpdateWithWhereUniqueWithoutCitasInput | valoracionesUpdateWithWhereUniqueWithoutCitasInput[]
    updateMany?: valoracionesUpdateManyWithWhereWithoutCitasInput | valoracionesUpdateManyWithWhereWithoutCitasInput[]
    deleteMany?: valoracionesScalarWhereInput | valoracionesScalarWhereInput[]
  }

  export type usuariosCreateNestedOneWithoutMensajes_mensajes_destinatario_idTousuariosInput = {
    create?: XOR<usuariosCreateWithoutMensajes_mensajes_destinatario_idTousuariosInput, usuariosUncheckedCreateWithoutMensajes_mensajes_destinatario_idTousuariosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutMensajes_mensajes_destinatario_idTousuariosInput
    connect?: usuariosWhereUniqueInput
  }

  export type usuariosCreateNestedOneWithoutMensajes_mensajes_remitente_idTousuariosInput = {
    create?: XOR<usuariosCreateWithoutMensajes_mensajes_remitente_idTousuariosInput, usuariosUncheckedCreateWithoutMensajes_mensajes_remitente_idTousuariosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutMensajes_mensajes_remitente_idTousuariosInput
    connect?: usuariosWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type usuariosUpdateOneRequiredWithoutMensajes_mensajes_destinatario_idTousuariosNestedInput = {
    create?: XOR<usuariosCreateWithoutMensajes_mensajes_destinatario_idTousuariosInput, usuariosUncheckedCreateWithoutMensajes_mensajes_destinatario_idTousuariosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutMensajes_mensajes_destinatario_idTousuariosInput
    upsert?: usuariosUpsertWithoutMensajes_mensajes_destinatario_idTousuariosInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutMensajes_mensajes_destinatario_idTousuariosInput, usuariosUpdateWithoutMensajes_mensajes_destinatario_idTousuariosInput>, usuariosUncheckedUpdateWithoutMensajes_mensajes_destinatario_idTousuariosInput>
  }

  export type usuariosUpdateOneRequiredWithoutMensajes_mensajes_remitente_idTousuariosNestedInput = {
    create?: XOR<usuariosCreateWithoutMensajes_mensajes_remitente_idTousuariosInput, usuariosUncheckedCreateWithoutMensajes_mensajes_remitente_idTousuariosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutMensajes_mensajes_remitente_idTousuariosInput
    upsert?: usuariosUpsertWithoutMensajes_mensajes_remitente_idTousuariosInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutMensajes_mensajes_remitente_idTousuariosInput, usuariosUpdateWithoutMensajes_mensajes_remitente_idTousuariosInput>, usuariosUncheckedUpdateWithoutMensajes_mensajes_remitente_idTousuariosInput>
  }

  export type usuariosCreateNestedOneWithoutPsicologosInput = {
    create?: XOR<usuariosCreateWithoutPsicologosInput, usuariosUncheckedCreateWithoutPsicologosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutPsicologosInput
    connect?: usuariosWhereUniqueInput
  }

  export type usuariosUpdateOneRequiredWithoutPsicologosNestedInput = {
    create?: XOR<usuariosCreateWithoutPsicologosInput, usuariosUncheckedCreateWithoutPsicologosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutPsicologosInput
    upsert?: usuariosUpsertWithoutPsicologosInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutPsicologosInput, usuariosUpdateWithoutPsicologosInput>, usuariosUncheckedUpdateWithoutPsicologosInput>
  }

  export type recomendaciones_empleadoCreateNestedManyWithoutRecomendacionesInput = {
    create?: XOR<recomendaciones_empleadoCreateWithoutRecomendacionesInput, recomendaciones_empleadoUncheckedCreateWithoutRecomendacionesInput> | recomendaciones_empleadoCreateWithoutRecomendacionesInput[] | recomendaciones_empleadoUncheckedCreateWithoutRecomendacionesInput[]
    connectOrCreate?: recomendaciones_empleadoCreateOrConnectWithoutRecomendacionesInput | recomendaciones_empleadoCreateOrConnectWithoutRecomendacionesInput[]
    createMany?: recomendaciones_empleadoCreateManyRecomendacionesInputEnvelope
    connect?: recomendaciones_empleadoWhereUniqueInput | recomendaciones_empleadoWhereUniqueInput[]
  }

  export type recomendaciones_empleadoUncheckedCreateNestedManyWithoutRecomendacionesInput = {
    create?: XOR<recomendaciones_empleadoCreateWithoutRecomendacionesInput, recomendaciones_empleadoUncheckedCreateWithoutRecomendacionesInput> | recomendaciones_empleadoCreateWithoutRecomendacionesInput[] | recomendaciones_empleadoUncheckedCreateWithoutRecomendacionesInput[]
    connectOrCreate?: recomendaciones_empleadoCreateOrConnectWithoutRecomendacionesInput | recomendaciones_empleadoCreateOrConnectWithoutRecomendacionesInput[]
    createMany?: recomendaciones_empleadoCreateManyRecomendacionesInputEnvelope
    connect?: recomendaciones_empleadoWhereUniqueInput | recomendaciones_empleadoWhereUniqueInput[]
  }

  export type recomendaciones_empleadoUpdateManyWithoutRecomendacionesNestedInput = {
    create?: XOR<recomendaciones_empleadoCreateWithoutRecomendacionesInput, recomendaciones_empleadoUncheckedCreateWithoutRecomendacionesInput> | recomendaciones_empleadoCreateWithoutRecomendacionesInput[] | recomendaciones_empleadoUncheckedCreateWithoutRecomendacionesInput[]
    connectOrCreate?: recomendaciones_empleadoCreateOrConnectWithoutRecomendacionesInput | recomendaciones_empleadoCreateOrConnectWithoutRecomendacionesInput[]
    upsert?: recomendaciones_empleadoUpsertWithWhereUniqueWithoutRecomendacionesInput | recomendaciones_empleadoUpsertWithWhereUniqueWithoutRecomendacionesInput[]
    createMany?: recomendaciones_empleadoCreateManyRecomendacionesInputEnvelope
    set?: recomendaciones_empleadoWhereUniqueInput | recomendaciones_empleadoWhereUniqueInput[]
    disconnect?: recomendaciones_empleadoWhereUniqueInput | recomendaciones_empleadoWhereUniqueInput[]
    delete?: recomendaciones_empleadoWhereUniqueInput | recomendaciones_empleadoWhereUniqueInput[]
    connect?: recomendaciones_empleadoWhereUniqueInput | recomendaciones_empleadoWhereUniqueInput[]
    update?: recomendaciones_empleadoUpdateWithWhereUniqueWithoutRecomendacionesInput | recomendaciones_empleadoUpdateWithWhereUniqueWithoutRecomendacionesInput[]
    updateMany?: recomendaciones_empleadoUpdateManyWithWhereWithoutRecomendacionesInput | recomendaciones_empleadoUpdateManyWithWhereWithoutRecomendacionesInput[]
    deleteMany?: recomendaciones_empleadoScalarWhereInput | recomendaciones_empleadoScalarWhereInput[]
  }

  export type recomendaciones_empleadoUncheckedUpdateManyWithoutRecomendacionesNestedInput = {
    create?: XOR<recomendaciones_empleadoCreateWithoutRecomendacionesInput, recomendaciones_empleadoUncheckedCreateWithoutRecomendacionesInput> | recomendaciones_empleadoCreateWithoutRecomendacionesInput[] | recomendaciones_empleadoUncheckedCreateWithoutRecomendacionesInput[]
    connectOrCreate?: recomendaciones_empleadoCreateOrConnectWithoutRecomendacionesInput | recomendaciones_empleadoCreateOrConnectWithoutRecomendacionesInput[]
    upsert?: recomendaciones_empleadoUpsertWithWhereUniqueWithoutRecomendacionesInput | recomendaciones_empleadoUpsertWithWhereUniqueWithoutRecomendacionesInput[]
    createMany?: recomendaciones_empleadoCreateManyRecomendacionesInputEnvelope
    set?: recomendaciones_empleadoWhereUniqueInput | recomendaciones_empleadoWhereUniqueInput[]
    disconnect?: recomendaciones_empleadoWhereUniqueInput | recomendaciones_empleadoWhereUniqueInput[]
    delete?: recomendaciones_empleadoWhereUniqueInput | recomendaciones_empleadoWhereUniqueInput[]
    connect?: recomendaciones_empleadoWhereUniqueInput | recomendaciones_empleadoWhereUniqueInput[]
    update?: recomendaciones_empleadoUpdateWithWhereUniqueWithoutRecomendacionesInput | recomendaciones_empleadoUpdateWithWhereUniqueWithoutRecomendacionesInput[]
    updateMany?: recomendaciones_empleadoUpdateManyWithWhereWithoutRecomendacionesInput | recomendaciones_empleadoUpdateManyWithWhereWithoutRecomendacionesInput[]
    deleteMany?: recomendaciones_empleadoScalarWhereInput | recomendaciones_empleadoScalarWhereInput[]
  }

  export type usuariosCreateNestedOneWithoutRecomendaciones_empleadoInput = {
    create?: XOR<usuariosCreateWithoutRecomendaciones_empleadoInput, usuariosUncheckedCreateWithoutRecomendaciones_empleadoInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutRecomendaciones_empleadoInput
    connect?: usuariosWhereUniqueInput
  }

  export type recomendacionesCreateNestedOneWithoutRecomendaciones_empleadoInput = {
    create?: XOR<recomendacionesCreateWithoutRecomendaciones_empleadoInput, recomendacionesUncheckedCreateWithoutRecomendaciones_empleadoInput>
    connectOrCreate?: recomendacionesCreateOrConnectWithoutRecomendaciones_empleadoInput
    connect?: recomendacionesWhereUniqueInput
  }

  export type usuariosUpdateOneRequiredWithoutRecomendaciones_empleadoNestedInput = {
    create?: XOR<usuariosCreateWithoutRecomendaciones_empleadoInput, usuariosUncheckedCreateWithoutRecomendaciones_empleadoInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutRecomendaciones_empleadoInput
    upsert?: usuariosUpsertWithoutRecomendaciones_empleadoInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutRecomendaciones_empleadoInput, usuariosUpdateWithoutRecomendaciones_empleadoInput>, usuariosUncheckedUpdateWithoutRecomendaciones_empleadoInput>
  }

  export type recomendacionesUpdateOneRequiredWithoutRecomendaciones_empleadoNestedInput = {
    create?: XOR<recomendacionesCreateWithoutRecomendaciones_empleadoInput, recomendacionesUncheckedCreateWithoutRecomendaciones_empleadoInput>
    connectOrCreate?: recomendacionesCreateOrConnectWithoutRecomendaciones_empleadoInput
    upsert?: recomendacionesUpsertWithoutRecomendaciones_empleadoInput
    connect?: recomendacionesWhereUniqueInput
    update?: XOR<XOR<recomendacionesUpdateToOneWithWhereWithoutRecomendaciones_empleadoInput, recomendacionesUpdateWithoutRecomendaciones_empleadoInput>, recomendacionesUncheckedUpdateWithoutRecomendaciones_empleadoInput>
  }

  export type checkinsCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<checkinsCreateWithoutUsuariosInput, checkinsUncheckedCreateWithoutUsuariosInput> | checkinsCreateWithoutUsuariosInput[] | checkinsUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: checkinsCreateOrConnectWithoutUsuariosInput | checkinsCreateOrConnectWithoutUsuariosInput[]
    createMany?: checkinsCreateManyUsuariosInputEnvelope
    connect?: checkinsWhereUniqueInput | checkinsWhereUniqueInput[]
  }

  export type citasCreateNestedManyWithoutUsuarios_citas_empleado_idTousuariosInput = {
    create?: XOR<citasCreateWithoutUsuarios_citas_empleado_idTousuariosInput, citasUncheckedCreateWithoutUsuarios_citas_empleado_idTousuariosInput> | citasCreateWithoutUsuarios_citas_empleado_idTousuariosInput[] | citasUncheckedCreateWithoutUsuarios_citas_empleado_idTousuariosInput[]
    connectOrCreate?: citasCreateOrConnectWithoutUsuarios_citas_empleado_idTousuariosInput | citasCreateOrConnectWithoutUsuarios_citas_empleado_idTousuariosInput[]
    createMany?: citasCreateManyUsuarios_citas_empleado_idTousuariosInputEnvelope
    connect?: citasWhereUniqueInput | citasWhereUniqueInput[]
  }

  export type citasCreateNestedManyWithoutUsuarios_citas_psicologo_idTousuariosInput = {
    create?: XOR<citasCreateWithoutUsuarios_citas_psicologo_idTousuariosInput, citasUncheckedCreateWithoutUsuarios_citas_psicologo_idTousuariosInput> | citasCreateWithoutUsuarios_citas_psicologo_idTousuariosInput[] | citasUncheckedCreateWithoutUsuarios_citas_psicologo_idTousuariosInput[]
    connectOrCreate?: citasCreateOrConnectWithoutUsuarios_citas_psicologo_idTousuariosInput | citasCreateOrConnectWithoutUsuarios_citas_psicologo_idTousuariosInput[]
    createMany?: citasCreateManyUsuarios_citas_psicologo_idTousuariosInputEnvelope
    connect?: citasWhereUniqueInput | citasWhereUniqueInput[]
  }

  export type mensajesCreateNestedManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput = {
    create?: XOR<mensajesCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput, mensajesUncheckedCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput> | mensajesCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput[] | mensajesUncheckedCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput[]
    connectOrCreate?: mensajesCreateOrConnectWithoutUsuarios_mensajes_destinatario_idTousuariosInput | mensajesCreateOrConnectWithoutUsuarios_mensajes_destinatario_idTousuariosInput[]
    createMany?: mensajesCreateManyUsuarios_mensajes_destinatario_idTousuariosInputEnvelope
    connect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
  }

  export type mensajesCreateNestedManyWithoutUsuarios_mensajes_remitente_idTousuariosInput = {
    create?: XOR<mensajesCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput, mensajesUncheckedCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput> | mensajesCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput[] | mensajesUncheckedCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput[]
    connectOrCreate?: mensajesCreateOrConnectWithoutUsuarios_mensajes_remitente_idTousuariosInput | mensajesCreateOrConnectWithoutUsuarios_mensajes_remitente_idTousuariosInput[]
    createMany?: mensajesCreateManyUsuarios_mensajes_remitente_idTousuariosInputEnvelope
    connect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
  }

  export type psicologosCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<psicologosCreateWithoutUsuariosInput, psicologosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: psicologosCreateOrConnectWithoutUsuariosInput
    connect?: psicologosWhereUniqueInput
  }

  export type recomendaciones_empleadoCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<recomendaciones_empleadoCreateWithoutUsuariosInput, recomendaciones_empleadoUncheckedCreateWithoutUsuariosInput> | recomendaciones_empleadoCreateWithoutUsuariosInput[] | recomendaciones_empleadoUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: recomendaciones_empleadoCreateOrConnectWithoutUsuariosInput | recomendaciones_empleadoCreateOrConnectWithoutUsuariosInput[]
    createMany?: recomendaciones_empleadoCreateManyUsuariosInputEnvelope
    connect?: recomendaciones_empleadoWhereUniqueInput | recomendaciones_empleadoWhereUniqueInput[]
  }

  export type valoracionesCreateNestedManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput = {
    create?: XOR<valoracionesCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput, valoracionesUncheckedCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput> | valoracionesCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput[] | valoracionesUncheckedCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput[]
    connectOrCreate?: valoracionesCreateOrConnectWithoutUsuarios_valoraciones_empleado_idTousuariosInput | valoracionesCreateOrConnectWithoutUsuarios_valoraciones_empleado_idTousuariosInput[]
    createMany?: valoracionesCreateManyUsuarios_valoraciones_empleado_idTousuariosInputEnvelope
    connect?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
  }

  export type valoracionesCreateNestedManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput = {
    create?: XOR<valoracionesCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput, valoracionesUncheckedCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput> | valoracionesCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput[] | valoracionesUncheckedCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput[]
    connectOrCreate?: valoracionesCreateOrConnectWithoutUsuarios_valoraciones_psicologo_idTousuariosInput | valoracionesCreateOrConnectWithoutUsuarios_valoraciones_psicologo_idTousuariosInput[]
    createMany?: valoracionesCreateManyUsuarios_valoraciones_psicologo_idTousuariosInputEnvelope
    connect?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
  }

  export type checkinsUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<checkinsCreateWithoutUsuariosInput, checkinsUncheckedCreateWithoutUsuariosInput> | checkinsCreateWithoutUsuariosInput[] | checkinsUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: checkinsCreateOrConnectWithoutUsuariosInput | checkinsCreateOrConnectWithoutUsuariosInput[]
    createMany?: checkinsCreateManyUsuariosInputEnvelope
    connect?: checkinsWhereUniqueInput | checkinsWhereUniqueInput[]
  }

  export type citasUncheckedCreateNestedManyWithoutUsuarios_citas_empleado_idTousuariosInput = {
    create?: XOR<citasCreateWithoutUsuarios_citas_empleado_idTousuariosInput, citasUncheckedCreateWithoutUsuarios_citas_empleado_idTousuariosInput> | citasCreateWithoutUsuarios_citas_empleado_idTousuariosInput[] | citasUncheckedCreateWithoutUsuarios_citas_empleado_idTousuariosInput[]
    connectOrCreate?: citasCreateOrConnectWithoutUsuarios_citas_empleado_idTousuariosInput | citasCreateOrConnectWithoutUsuarios_citas_empleado_idTousuariosInput[]
    createMany?: citasCreateManyUsuarios_citas_empleado_idTousuariosInputEnvelope
    connect?: citasWhereUniqueInput | citasWhereUniqueInput[]
  }

  export type citasUncheckedCreateNestedManyWithoutUsuarios_citas_psicologo_idTousuariosInput = {
    create?: XOR<citasCreateWithoutUsuarios_citas_psicologo_idTousuariosInput, citasUncheckedCreateWithoutUsuarios_citas_psicologo_idTousuariosInput> | citasCreateWithoutUsuarios_citas_psicologo_idTousuariosInput[] | citasUncheckedCreateWithoutUsuarios_citas_psicologo_idTousuariosInput[]
    connectOrCreate?: citasCreateOrConnectWithoutUsuarios_citas_psicologo_idTousuariosInput | citasCreateOrConnectWithoutUsuarios_citas_psicologo_idTousuariosInput[]
    createMany?: citasCreateManyUsuarios_citas_psicologo_idTousuariosInputEnvelope
    connect?: citasWhereUniqueInput | citasWhereUniqueInput[]
  }

  export type mensajesUncheckedCreateNestedManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput = {
    create?: XOR<mensajesCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput, mensajesUncheckedCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput> | mensajesCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput[] | mensajesUncheckedCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput[]
    connectOrCreate?: mensajesCreateOrConnectWithoutUsuarios_mensajes_destinatario_idTousuariosInput | mensajesCreateOrConnectWithoutUsuarios_mensajes_destinatario_idTousuariosInput[]
    createMany?: mensajesCreateManyUsuarios_mensajes_destinatario_idTousuariosInputEnvelope
    connect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
  }

  export type mensajesUncheckedCreateNestedManyWithoutUsuarios_mensajes_remitente_idTousuariosInput = {
    create?: XOR<mensajesCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput, mensajesUncheckedCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput> | mensajesCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput[] | mensajesUncheckedCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput[]
    connectOrCreate?: mensajesCreateOrConnectWithoutUsuarios_mensajes_remitente_idTousuariosInput | mensajesCreateOrConnectWithoutUsuarios_mensajes_remitente_idTousuariosInput[]
    createMany?: mensajesCreateManyUsuarios_mensajes_remitente_idTousuariosInputEnvelope
    connect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
  }

  export type psicologosUncheckedCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<psicologosCreateWithoutUsuariosInput, psicologosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: psicologosCreateOrConnectWithoutUsuariosInput
    connect?: psicologosWhereUniqueInput
  }

  export type recomendaciones_empleadoUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<recomendaciones_empleadoCreateWithoutUsuariosInput, recomendaciones_empleadoUncheckedCreateWithoutUsuariosInput> | recomendaciones_empleadoCreateWithoutUsuariosInput[] | recomendaciones_empleadoUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: recomendaciones_empleadoCreateOrConnectWithoutUsuariosInput | recomendaciones_empleadoCreateOrConnectWithoutUsuariosInput[]
    createMany?: recomendaciones_empleadoCreateManyUsuariosInputEnvelope
    connect?: recomendaciones_empleadoWhereUniqueInput | recomendaciones_empleadoWhereUniqueInput[]
  }

  export type valoracionesUncheckedCreateNestedManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput = {
    create?: XOR<valoracionesCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput, valoracionesUncheckedCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput> | valoracionesCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput[] | valoracionesUncheckedCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput[]
    connectOrCreate?: valoracionesCreateOrConnectWithoutUsuarios_valoraciones_empleado_idTousuariosInput | valoracionesCreateOrConnectWithoutUsuarios_valoraciones_empleado_idTousuariosInput[]
    createMany?: valoracionesCreateManyUsuarios_valoraciones_empleado_idTousuariosInputEnvelope
    connect?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
  }

  export type valoracionesUncheckedCreateNestedManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput = {
    create?: XOR<valoracionesCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput, valoracionesUncheckedCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput> | valoracionesCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput[] | valoracionesUncheckedCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput[]
    connectOrCreate?: valoracionesCreateOrConnectWithoutUsuarios_valoraciones_psicologo_idTousuariosInput | valoracionesCreateOrConnectWithoutUsuarios_valoraciones_psicologo_idTousuariosInput[]
    createMany?: valoracionesCreateManyUsuarios_valoraciones_psicologo_idTousuariosInputEnvelope
    connect?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
  }

  export type checkinsUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<checkinsCreateWithoutUsuariosInput, checkinsUncheckedCreateWithoutUsuariosInput> | checkinsCreateWithoutUsuariosInput[] | checkinsUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: checkinsCreateOrConnectWithoutUsuariosInput | checkinsCreateOrConnectWithoutUsuariosInput[]
    upsert?: checkinsUpsertWithWhereUniqueWithoutUsuariosInput | checkinsUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: checkinsCreateManyUsuariosInputEnvelope
    set?: checkinsWhereUniqueInput | checkinsWhereUniqueInput[]
    disconnect?: checkinsWhereUniqueInput | checkinsWhereUniqueInput[]
    delete?: checkinsWhereUniqueInput | checkinsWhereUniqueInput[]
    connect?: checkinsWhereUniqueInput | checkinsWhereUniqueInput[]
    update?: checkinsUpdateWithWhereUniqueWithoutUsuariosInput | checkinsUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: checkinsUpdateManyWithWhereWithoutUsuariosInput | checkinsUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: checkinsScalarWhereInput | checkinsScalarWhereInput[]
  }

  export type citasUpdateManyWithoutUsuarios_citas_empleado_idTousuariosNestedInput = {
    create?: XOR<citasCreateWithoutUsuarios_citas_empleado_idTousuariosInput, citasUncheckedCreateWithoutUsuarios_citas_empleado_idTousuariosInput> | citasCreateWithoutUsuarios_citas_empleado_idTousuariosInput[] | citasUncheckedCreateWithoutUsuarios_citas_empleado_idTousuariosInput[]
    connectOrCreate?: citasCreateOrConnectWithoutUsuarios_citas_empleado_idTousuariosInput | citasCreateOrConnectWithoutUsuarios_citas_empleado_idTousuariosInput[]
    upsert?: citasUpsertWithWhereUniqueWithoutUsuarios_citas_empleado_idTousuariosInput | citasUpsertWithWhereUniqueWithoutUsuarios_citas_empleado_idTousuariosInput[]
    createMany?: citasCreateManyUsuarios_citas_empleado_idTousuariosInputEnvelope
    set?: citasWhereUniqueInput | citasWhereUniqueInput[]
    disconnect?: citasWhereUniqueInput | citasWhereUniqueInput[]
    delete?: citasWhereUniqueInput | citasWhereUniqueInput[]
    connect?: citasWhereUniqueInput | citasWhereUniqueInput[]
    update?: citasUpdateWithWhereUniqueWithoutUsuarios_citas_empleado_idTousuariosInput | citasUpdateWithWhereUniqueWithoutUsuarios_citas_empleado_idTousuariosInput[]
    updateMany?: citasUpdateManyWithWhereWithoutUsuarios_citas_empleado_idTousuariosInput | citasUpdateManyWithWhereWithoutUsuarios_citas_empleado_idTousuariosInput[]
    deleteMany?: citasScalarWhereInput | citasScalarWhereInput[]
  }

  export type citasUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosNestedInput = {
    create?: XOR<citasCreateWithoutUsuarios_citas_psicologo_idTousuariosInput, citasUncheckedCreateWithoutUsuarios_citas_psicologo_idTousuariosInput> | citasCreateWithoutUsuarios_citas_psicologo_idTousuariosInput[] | citasUncheckedCreateWithoutUsuarios_citas_psicologo_idTousuariosInput[]
    connectOrCreate?: citasCreateOrConnectWithoutUsuarios_citas_psicologo_idTousuariosInput | citasCreateOrConnectWithoutUsuarios_citas_psicologo_idTousuariosInput[]
    upsert?: citasUpsertWithWhereUniqueWithoutUsuarios_citas_psicologo_idTousuariosInput | citasUpsertWithWhereUniqueWithoutUsuarios_citas_psicologo_idTousuariosInput[]
    createMany?: citasCreateManyUsuarios_citas_psicologo_idTousuariosInputEnvelope
    set?: citasWhereUniqueInput | citasWhereUniqueInput[]
    disconnect?: citasWhereUniqueInput | citasWhereUniqueInput[]
    delete?: citasWhereUniqueInput | citasWhereUniqueInput[]
    connect?: citasWhereUniqueInput | citasWhereUniqueInput[]
    update?: citasUpdateWithWhereUniqueWithoutUsuarios_citas_psicologo_idTousuariosInput | citasUpdateWithWhereUniqueWithoutUsuarios_citas_psicologo_idTousuariosInput[]
    updateMany?: citasUpdateManyWithWhereWithoutUsuarios_citas_psicologo_idTousuariosInput | citasUpdateManyWithWhereWithoutUsuarios_citas_psicologo_idTousuariosInput[]
    deleteMany?: citasScalarWhereInput | citasScalarWhereInput[]
  }

  export type mensajesUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosNestedInput = {
    create?: XOR<mensajesCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput, mensajesUncheckedCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput> | mensajesCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput[] | mensajesUncheckedCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput[]
    connectOrCreate?: mensajesCreateOrConnectWithoutUsuarios_mensajes_destinatario_idTousuariosInput | mensajesCreateOrConnectWithoutUsuarios_mensajes_destinatario_idTousuariosInput[]
    upsert?: mensajesUpsertWithWhereUniqueWithoutUsuarios_mensajes_destinatario_idTousuariosInput | mensajesUpsertWithWhereUniqueWithoutUsuarios_mensajes_destinatario_idTousuariosInput[]
    createMany?: mensajesCreateManyUsuarios_mensajes_destinatario_idTousuariosInputEnvelope
    set?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    disconnect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    delete?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    connect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    update?: mensajesUpdateWithWhereUniqueWithoutUsuarios_mensajes_destinatario_idTousuariosInput | mensajesUpdateWithWhereUniqueWithoutUsuarios_mensajes_destinatario_idTousuariosInput[]
    updateMany?: mensajesUpdateManyWithWhereWithoutUsuarios_mensajes_destinatario_idTousuariosInput | mensajesUpdateManyWithWhereWithoutUsuarios_mensajes_destinatario_idTousuariosInput[]
    deleteMany?: mensajesScalarWhereInput | mensajesScalarWhereInput[]
  }

  export type mensajesUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosNestedInput = {
    create?: XOR<mensajesCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput, mensajesUncheckedCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput> | mensajesCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput[] | mensajesUncheckedCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput[]
    connectOrCreate?: mensajesCreateOrConnectWithoutUsuarios_mensajes_remitente_idTousuariosInput | mensajesCreateOrConnectWithoutUsuarios_mensajes_remitente_idTousuariosInput[]
    upsert?: mensajesUpsertWithWhereUniqueWithoutUsuarios_mensajes_remitente_idTousuariosInput | mensajesUpsertWithWhereUniqueWithoutUsuarios_mensajes_remitente_idTousuariosInput[]
    createMany?: mensajesCreateManyUsuarios_mensajes_remitente_idTousuariosInputEnvelope
    set?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    disconnect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    delete?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    connect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    update?: mensajesUpdateWithWhereUniqueWithoutUsuarios_mensajes_remitente_idTousuariosInput | mensajesUpdateWithWhereUniqueWithoutUsuarios_mensajes_remitente_idTousuariosInput[]
    updateMany?: mensajesUpdateManyWithWhereWithoutUsuarios_mensajes_remitente_idTousuariosInput | mensajesUpdateManyWithWhereWithoutUsuarios_mensajes_remitente_idTousuariosInput[]
    deleteMany?: mensajesScalarWhereInput | mensajesScalarWhereInput[]
  }

  export type psicologosUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<psicologosCreateWithoutUsuariosInput, psicologosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: psicologosCreateOrConnectWithoutUsuariosInput
    upsert?: psicologosUpsertWithoutUsuariosInput
    disconnect?: psicologosWhereInput | boolean
    delete?: psicologosWhereInput | boolean
    connect?: psicologosWhereUniqueInput
    update?: XOR<XOR<psicologosUpdateToOneWithWhereWithoutUsuariosInput, psicologosUpdateWithoutUsuariosInput>, psicologosUncheckedUpdateWithoutUsuariosInput>
  }

  export type recomendaciones_empleadoUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<recomendaciones_empleadoCreateWithoutUsuariosInput, recomendaciones_empleadoUncheckedCreateWithoutUsuariosInput> | recomendaciones_empleadoCreateWithoutUsuariosInput[] | recomendaciones_empleadoUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: recomendaciones_empleadoCreateOrConnectWithoutUsuariosInput | recomendaciones_empleadoCreateOrConnectWithoutUsuariosInput[]
    upsert?: recomendaciones_empleadoUpsertWithWhereUniqueWithoutUsuariosInput | recomendaciones_empleadoUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: recomendaciones_empleadoCreateManyUsuariosInputEnvelope
    set?: recomendaciones_empleadoWhereUniqueInput | recomendaciones_empleadoWhereUniqueInput[]
    disconnect?: recomendaciones_empleadoWhereUniqueInput | recomendaciones_empleadoWhereUniqueInput[]
    delete?: recomendaciones_empleadoWhereUniqueInput | recomendaciones_empleadoWhereUniqueInput[]
    connect?: recomendaciones_empleadoWhereUniqueInput | recomendaciones_empleadoWhereUniqueInput[]
    update?: recomendaciones_empleadoUpdateWithWhereUniqueWithoutUsuariosInput | recomendaciones_empleadoUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: recomendaciones_empleadoUpdateManyWithWhereWithoutUsuariosInput | recomendaciones_empleadoUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: recomendaciones_empleadoScalarWhereInput | recomendaciones_empleadoScalarWhereInput[]
  }

  export type valoracionesUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosNestedInput = {
    create?: XOR<valoracionesCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput, valoracionesUncheckedCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput> | valoracionesCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput[] | valoracionesUncheckedCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput[]
    connectOrCreate?: valoracionesCreateOrConnectWithoutUsuarios_valoraciones_empleado_idTousuariosInput | valoracionesCreateOrConnectWithoutUsuarios_valoraciones_empleado_idTousuariosInput[]
    upsert?: valoracionesUpsertWithWhereUniqueWithoutUsuarios_valoraciones_empleado_idTousuariosInput | valoracionesUpsertWithWhereUniqueWithoutUsuarios_valoraciones_empleado_idTousuariosInput[]
    createMany?: valoracionesCreateManyUsuarios_valoraciones_empleado_idTousuariosInputEnvelope
    set?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    disconnect?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    delete?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    connect?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    update?: valoracionesUpdateWithWhereUniqueWithoutUsuarios_valoraciones_empleado_idTousuariosInput | valoracionesUpdateWithWhereUniqueWithoutUsuarios_valoraciones_empleado_idTousuariosInput[]
    updateMany?: valoracionesUpdateManyWithWhereWithoutUsuarios_valoraciones_empleado_idTousuariosInput | valoracionesUpdateManyWithWhereWithoutUsuarios_valoraciones_empleado_idTousuariosInput[]
    deleteMany?: valoracionesScalarWhereInput | valoracionesScalarWhereInput[]
  }

  export type valoracionesUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosNestedInput = {
    create?: XOR<valoracionesCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput, valoracionesUncheckedCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput> | valoracionesCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput[] | valoracionesUncheckedCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput[]
    connectOrCreate?: valoracionesCreateOrConnectWithoutUsuarios_valoraciones_psicologo_idTousuariosInput | valoracionesCreateOrConnectWithoutUsuarios_valoraciones_psicologo_idTousuariosInput[]
    upsert?: valoracionesUpsertWithWhereUniqueWithoutUsuarios_valoraciones_psicologo_idTousuariosInput | valoracionesUpsertWithWhereUniqueWithoutUsuarios_valoraciones_psicologo_idTousuariosInput[]
    createMany?: valoracionesCreateManyUsuarios_valoraciones_psicologo_idTousuariosInputEnvelope
    set?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    disconnect?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    delete?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    connect?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    update?: valoracionesUpdateWithWhereUniqueWithoutUsuarios_valoraciones_psicologo_idTousuariosInput | valoracionesUpdateWithWhereUniqueWithoutUsuarios_valoraciones_psicologo_idTousuariosInput[]
    updateMany?: valoracionesUpdateManyWithWhereWithoutUsuarios_valoraciones_psicologo_idTousuariosInput | valoracionesUpdateManyWithWhereWithoutUsuarios_valoraciones_psicologo_idTousuariosInput[]
    deleteMany?: valoracionesScalarWhereInput | valoracionesScalarWhereInput[]
  }

  export type checkinsUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<checkinsCreateWithoutUsuariosInput, checkinsUncheckedCreateWithoutUsuariosInput> | checkinsCreateWithoutUsuariosInput[] | checkinsUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: checkinsCreateOrConnectWithoutUsuariosInput | checkinsCreateOrConnectWithoutUsuariosInput[]
    upsert?: checkinsUpsertWithWhereUniqueWithoutUsuariosInput | checkinsUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: checkinsCreateManyUsuariosInputEnvelope
    set?: checkinsWhereUniqueInput | checkinsWhereUniqueInput[]
    disconnect?: checkinsWhereUniqueInput | checkinsWhereUniqueInput[]
    delete?: checkinsWhereUniqueInput | checkinsWhereUniqueInput[]
    connect?: checkinsWhereUniqueInput | checkinsWhereUniqueInput[]
    update?: checkinsUpdateWithWhereUniqueWithoutUsuariosInput | checkinsUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: checkinsUpdateManyWithWhereWithoutUsuariosInput | checkinsUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: checkinsScalarWhereInput | checkinsScalarWhereInput[]
  }

  export type citasUncheckedUpdateManyWithoutUsuarios_citas_empleado_idTousuariosNestedInput = {
    create?: XOR<citasCreateWithoutUsuarios_citas_empleado_idTousuariosInput, citasUncheckedCreateWithoutUsuarios_citas_empleado_idTousuariosInput> | citasCreateWithoutUsuarios_citas_empleado_idTousuariosInput[] | citasUncheckedCreateWithoutUsuarios_citas_empleado_idTousuariosInput[]
    connectOrCreate?: citasCreateOrConnectWithoutUsuarios_citas_empleado_idTousuariosInput | citasCreateOrConnectWithoutUsuarios_citas_empleado_idTousuariosInput[]
    upsert?: citasUpsertWithWhereUniqueWithoutUsuarios_citas_empleado_idTousuariosInput | citasUpsertWithWhereUniqueWithoutUsuarios_citas_empleado_idTousuariosInput[]
    createMany?: citasCreateManyUsuarios_citas_empleado_idTousuariosInputEnvelope
    set?: citasWhereUniqueInput | citasWhereUniqueInput[]
    disconnect?: citasWhereUniqueInput | citasWhereUniqueInput[]
    delete?: citasWhereUniqueInput | citasWhereUniqueInput[]
    connect?: citasWhereUniqueInput | citasWhereUniqueInput[]
    update?: citasUpdateWithWhereUniqueWithoutUsuarios_citas_empleado_idTousuariosInput | citasUpdateWithWhereUniqueWithoutUsuarios_citas_empleado_idTousuariosInput[]
    updateMany?: citasUpdateManyWithWhereWithoutUsuarios_citas_empleado_idTousuariosInput | citasUpdateManyWithWhereWithoutUsuarios_citas_empleado_idTousuariosInput[]
    deleteMany?: citasScalarWhereInput | citasScalarWhereInput[]
  }

  export type citasUncheckedUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosNestedInput = {
    create?: XOR<citasCreateWithoutUsuarios_citas_psicologo_idTousuariosInput, citasUncheckedCreateWithoutUsuarios_citas_psicologo_idTousuariosInput> | citasCreateWithoutUsuarios_citas_psicologo_idTousuariosInput[] | citasUncheckedCreateWithoutUsuarios_citas_psicologo_idTousuariosInput[]
    connectOrCreate?: citasCreateOrConnectWithoutUsuarios_citas_psicologo_idTousuariosInput | citasCreateOrConnectWithoutUsuarios_citas_psicologo_idTousuariosInput[]
    upsert?: citasUpsertWithWhereUniqueWithoutUsuarios_citas_psicologo_idTousuariosInput | citasUpsertWithWhereUniqueWithoutUsuarios_citas_psicologo_idTousuariosInput[]
    createMany?: citasCreateManyUsuarios_citas_psicologo_idTousuariosInputEnvelope
    set?: citasWhereUniqueInput | citasWhereUniqueInput[]
    disconnect?: citasWhereUniqueInput | citasWhereUniqueInput[]
    delete?: citasWhereUniqueInput | citasWhereUniqueInput[]
    connect?: citasWhereUniqueInput | citasWhereUniqueInput[]
    update?: citasUpdateWithWhereUniqueWithoutUsuarios_citas_psicologo_idTousuariosInput | citasUpdateWithWhereUniqueWithoutUsuarios_citas_psicologo_idTousuariosInput[]
    updateMany?: citasUpdateManyWithWhereWithoutUsuarios_citas_psicologo_idTousuariosInput | citasUpdateManyWithWhereWithoutUsuarios_citas_psicologo_idTousuariosInput[]
    deleteMany?: citasScalarWhereInput | citasScalarWhereInput[]
  }

  export type mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosNestedInput = {
    create?: XOR<mensajesCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput, mensajesUncheckedCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput> | mensajesCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput[] | mensajesUncheckedCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput[]
    connectOrCreate?: mensajesCreateOrConnectWithoutUsuarios_mensajes_destinatario_idTousuariosInput | mensajesCreateOrConnectWithoutUsuarios_mensajes_destinatario_idTousuariosInput[]
    upsert?: mensajesUpsertWithWhereUniqueWithoutUsuarios_mensajes_destinatario_idTousuariosInput | mensajesUpsertWithWhereUniqueWithoutUsuarios_mensajes_destinatario_idTousuariosInput[]
    createMany?: mensajesCreateManyUsuarios_mensajes_destinatario_idTousuariosInputEnvelope
    set?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    disconnect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    delete?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    connect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    update?: mensajesUpdateWithWhereUniqueWithoutUsuarios_mensajes_destinatario_idTousuariosInput | mensajesUpdateWithWhereUniqueWithoutUsuarios_mensajes_destinatario_idTousuariosInput[]
    updateMany?: mensajesUpdateManyWithWhereWithoutUsuarios_mensajes_destinatario_idTousuariosInput | mensajesUpdateManyWithWhereWithoutUsuarios_mensajes_destinatario_idTousuariosInput[]
    deleteMany?: mensajesScalarWhereInput | mensajesScalarWhereInput[]
  }

  export type mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosNestedInput = {
    create?: XOR<mensajesCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput, mensajesUncheckedCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput> | mensajesCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput[] | mensajesUncheckedCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput[]
    connectOrCreate?: mensajesCreateOrConnectWithoutUsuarios_mensajes_remitente_idTousuariosInput | mensajesCreateOrConnectWithoutUsuarios_mensajes_remitente_idTousuariosInput[]
    upsert?: mensajesUpsertWithWhereUniqueWithoutUsuarios_mensajes_remitente_idTousuariosInput | mensajesUpsertWithWhereUniqueWithoutUsuarios_mensajes_remitente_idTousuariosInput[]
    createMany?: mensajesCreateManyUsuarios_mensajes_remitente_idTousuariosInputEnvelope
    set?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    disconnect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    delete?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    connect?: mensajesWhereUniqueInput | mensajesWhereUniqueInput[]
    update?: mensajesUpdateWithWhereUniqueWithoutUsuarios_mensajes_remitente_idTousuariosInput | mensajesUpdateWithWhereUniqueWithoutUsuarios_mensajes_remitente_idTousuariosInput[]
    updateMany?: mensajesUpdateManyWithWhereWithoutUsuarios_mensajes_remitente_idTousuariosInput | mensajesUpdateManyWithWhereWithoutUsuarios_mensajes_remitente_idTousuariosInput[]
    deleteMany?: mensajesScalarWhereInput | mensajesScalarWhereInput[]
  }

  export type psicologosUncheckedUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<psicologosCreateWithoutUsuariosInput, psicologosUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: psicologosCreateOrConnectWithoutUsuariosInput
    upsert?: psicologosUpsertWithoutUsuariosInput
    disconnect?: psicologosWhereInput | boolean
    delete?: psicologosWhereInput | boolean
    connect?: psicologosWhereUniqueInput
    update?: XOR<XOR<psicologosUpdateToOneWithWhereWithoutUsuariosInput, psicologosUpdateWithoutUsuariosInput>, psicologosUncheckedUpdateWithoutUsuariosInput>
  }

  export type recomendaciones_empleadoUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<recomendaciones_empleadoCreateWithoutUsuariosInput, recomendaciones_empleadoUncheckedCreateWithoutUsuariosInput> | recomendaciones_empleadoCreateWithoutUsuariosInput[] | recomendaciones_empleadoUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: recomendaciones_empleadoCreateOrConnectWithoutUsuariosInput | recomendaciones_empleadoCreateOrConnectWithoutUsuariosInput[]
    upsert?: recomendaciones_empleadoUpsertWithWhereUniqueWithoutUsuariosInput | recomendaciones_empleadoUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: recomendaciones_empleadoCreateManyUsuariosInputEnvelope
    set?: recomendaciones_empleadoWhereUniqueInput | recomendaciones_empleadoWhereUniqueInput[]
    disconnect?: recomendaciones_empleadoWhereUniqueInput | recomendaciones_empleadoWhereUniqueInput[]
    delete?: recomendaciones_empleadoWhereUniqueInput | recomendaciones_empleadoWhereUniqueInput[]
    connect?: recomendaciones_empleadoWhereUniqueInput | recomendaciones_empleadoWhereUniqueInput[]
    update?: recomendaciones_empleadoUpdateWithWhereUniqueWithoutUsuariosInput | recomendaciones_empleadoUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: recomendaciones_empleadoUpdateManyWithWhereWithoutUsuariosInput | recomendaciones_empleadoUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: recomendaciones_empleadoScalarWhereInput | recomendaciones_empleadoScalarWhereInput[]
  }

  export type valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosNestedInput = {
    create?: XOR<valoracionesCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput, valoracionesUncheckedCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput> | valoracionesCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput[] | valoracionesUncheckedCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput[]
    connectOrCreate?: valoracionesCreateOrConnectWithoutUsuarios_valoraciones_empleado_idTousuariosInput | valoracionesCreateOrConnectWithoutUsuarios_valoraciones_empleado_idTousuariosInput[]
    upsert?: valoracionesUpsertWithWhereUniqueWithoutUsuarios_valoraciones_empleado_idTousuariosInput | valoracionesUpsertWithWhereUniqueWithoutUsuarios_valoraciones_empleado_idTousuariosInput[]
    createMany?: valoracionesCreateManyUsuarios_valoraciones_empleado_idTousuariosInputEnvelope
    set?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    disconnect?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    delete?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    connect?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    update?: valoracionesUpdateWithWhereUniqueWithoutUsuarios_valoraciones_empleado_idTousuariosInput | valoracionesUpdateWithWhereUniqueWithoutUsuarios_valoraciones_empleado_idTousuariosInput[]
    updateMany?: valoracionesUpdateManyWithWhereWithoutUsuarios_valoraciones_empleado_idTousuariosInput | valoracionesUpdateManyWithWhereWithoutUsuarios_valoraciones_empleado_idTousuariosInput[]
    deleteMany?: valoracionesScalarWhereInput | valoracionesScalarWhereInput[]
  }

  export type valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosNestedInput = {
    create?: XOR<valoracionesCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput, valoracionesUncheckedCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput> | valoracionesCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput[] | valoracionesUncheckedCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput[]
    connectOrCreate?: valoracionesCreateOrConnectWithoutUsuarios_valoraciones_psicologo_idTousuariosInput | valoracionesCreateOrConnectWithoutUsuarios_valoraciones_psicologo_idTousuariosInput[]
    upsert?: valoracionesUpsertWithWhereUniqueWithoutUsuarios_valoraciones_psicologo_idTousuariosInput | valoracionesUpsertWithWhereUniqueWithoutUsuarios_valoraciones_psicologo_idTousuariosInput[]
    createMany?: valoracionesCreateManyUsuarios_valoraciones_psicologo_idTousuariosInputEnvelope
    set?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    disconnect?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    delete?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    connect?: valoracionesWhereUniqueInput | valoracionesWhereUniqueInput[]
    update?: valoracionesUpdateWithWhereUniqueWithoutUsuarios_valoraciones_psicologo_idTousuariosInput | valoracionesUpdateWithWhereUniqueWithoutUsuarios_valoraciones_psicologo_idTousuariosInput[]
    updateMany?: valoracionesUpdateManyWithWhereWithoutUsuarios_valoraciones_psicologo_idTousuariosInput | valoracionesUpdateManyWithWhereWithoutUsuarios_valoraciones_psicologo_idTousuariosInput[]
    deleteMany?: valoracionesScalarWhereInput | valoracionesScalarWhereInput[]
  }

  export type citasCreateNestedOneWithoutValoracionesInput = {
    create?: XOR<citasCreateWithoutValoracionesInput, citasUncheckedCreateWithoutValoracionesInput>
    connectOrCreate?: citasCreateOrConnectWithoutValoracionesInput
    connect?: citasWhereUniqueInput
  }

  export type usuariosCreateNestedOneWithoutValoraciones_valoraciones_empleado_idTousuariosInput = {
    create?: XOR<usuariosCreateWithoutValoraciones_valoraciones_empleado_idTousuariosInput, usuariosUncheckedCreateWithoutValoraciones_valoraciones_empleado_idTousuariosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutValoraciones_valoraciones_empleado_idTousuariosInput
    connect?: usuariosWhereUniqueInput
  }

  export type usuariosCreateNestedOneWithoutValoraciones_valoraciones_psicologo_idTousuariosInput = {
    create?: XOR<usuariosCreateWithoutValoraciones_valoraciones_psicologo_idTousuariosInput, usuariosUncheckedCreateWithoutValoraciones_valoraciones_psicologo_idTousuariosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutValoraciones_valoraciones_psicologo_idTousuariosInput
    connect?: usuariosWhereUniqueInput
  }

  export type citasUpdateOneRequiredWithoutValoracionesNestedInput = {
    create?: XOR<citasCreateWithoutValoracionesInput, citasUncheckedCreateWithoutValoracionesInput>
    connectOrCreate?: citasCreateOrConnectWithoutValoracionesInput
    upsert?: citasUpsertWithoutValoracionesInput
    connect?: citasWhereUniqueInput
    update?: XOR<XOR<citasUpdateToOneWithWhereWithoutValoracionesInput, citasUpdateWithoutValoracionesInput>, citasUncheckedUpdateWithoutValoracionesInput>
  }

  export type usuariosUpdateOneRequiredWithoutValoraciones_valoraciones_empleado_idTousuariosNestedInput = {
    create?: XOR<usuariosCreateWithoutValoraciones_valoraciones_empleado_idTousuariosInput, usuariosUncheckedCreateWithoutValoraciones_valoraciones_empleado_idTousuariosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutValoraciones_valoraciones_empleado_idTousuariosInput
    upsert?: usuariosUpsertWithoutValoraciones_valoraciones_empleado_idTousuariosInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutValoraciones_valoraciones_empleado_idTousuariosInput, usuariosUpdateWithoutValoraciones_valoraciones_empleado_idTousuariosInput>, usuariosUncheckedUpdateWithoutValoraciones_valoraciones_empleado_idTousuariosInput>
  }

  export type usuariosUpdateOneRequiredWithoutValoraciones_valoraciones_psicologo_idTousuariosNestedInput = {
    create?: XOR<usuariosCreateWithoutValoraciones_valoraciones_psicologo_idTousuariosInput, usuariosUncheckedCreateWithoutValoraciones_valoraciones_psicologo_idTousuariosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutValoraciones_valoraciones_psicologo_idTousuariosInput
    upsert?: usuariosUpsertWithoutValoraciones_valoraciones_psicologo_idTousuariosInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutValoraciones_valoraciones_psicologo_idTousuariosInput, usuariosUpdateWithoutValoraciones_valoraciones_psicologo_idTousuariosInput>, usuariosUncheckedUpdateWithoutValoraciones_valoraciones_psicologo_idTousuariosInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type usuariosCreateWithoutCheckinsInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    citas_citas_empleado_idTousuarios?: citasCreateNestedManyWithoutUsuarios_citas_empleado_idTousuariosInput
    citas_citas_psicologo_idTousuarios?: citasCreateNestedManyWithoutUsuarios_citas_psicologo_idTousuariosInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesCreateNestedManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesCreateNestedManyWithoutUsuarios_mensajes_remitente_idTousuariosInput
    psicologos?: psicologosCreateNestedOneWithoutUsuariosInput
    recomendaciones_empleado?: recomendaciones_empleadoCreateNestedManyWithoutUsuariosInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesCreateNestedManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesCreateNestedManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput
  }

  export type usuariosUncheckedCreateWithoutCheckinsInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    citas_citas_empleado_idTousuarios?: citasUncheckedCreateNestedManyWithoutUsuarios_citas_empleado_idTousuariosInput
    citas_citas_psicologo_idTousuarios?: citasUncheckedCreateNestedManyWithoutUsuarios_citas_psicologo_idTousuariosInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUncheckedCreateNestedManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUncheckedCreateNestedManyWithoutUsuarios_mensajes_remitente_idTousuariosInput
    psicologos?: psicologosUncheckedCreateNestedOneWithoutUsuariosInput
    recomendaciones_empleado?: recomendaciones_empleadoUncheckedCreateNestedManyWithoutUsuariosInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUncheckedCreateNestedManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUncheckedCreateNestedManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput
  }

  export type usuariosCreateOrConnectWithoutCheckinsInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutCheckinsInput, usuariosUncheckedCreateWithoutCheckinsInput>
  }

  export type usuariosUpsertWithoutCheckinsInput = {
    update: XOR<usuariosUpdateWithoutCheckinsInput, usuariosUncheckedUpdateWithoutCheckinsInput>
    create: XOR<usuariosCreateWithoutCheckinsInput, usuariosUncheckedCreateWithoutCheckinsInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutCheckinsInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutCheckinsInput, usuariosUncheckedUpdateWithoutCheckinsInput>
  }

  export type usuariosUpdateWithoutCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    citas_citas_empleado_idTousuarios?: citasUpdateManyWithoutUsuarios_citas_empleado_idTousuariosNestedInput
    citas_citas_psicologo_idTousuarios?: citasUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosNestedInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosNestedInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosNestedInput
    psicologos?: psicologosUpdateOneWithoutUsuariosNestedInput
    recomendaciones_empleado?: recomendaciones_empleadoUpdateManyWithoutUsuariosNestedInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosNestedInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    citas_citas_empleado_idTousuarios?: citasUncheckedUpdateManyWithoutUsuarios_citas_empleado_idTousuariosNestedInput
    citas_citas_psicologo_idTousuarios?: citasUncheckedUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosNestedInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosNestedInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosNestedInput
    psicologos?: psicologosUncheckedUpdateOneWithoutUsuariosNestedInput
    recomendaciones_empleado?: recomendaciones_empleadoUncheckedUpdateManyWithoutUsuariosNestedInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosNestedInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type usuariosCreateWithoutCitas_citas_empleado_idTousuariosInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    checkins?: checkinsCreateNestedManyWithoutUsuariosInput
    citas_citas_psicologo_idTousuarios?: citasCreateNestedManyWithoutUsuarios_citas_psicologo_idTousuariosInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesCreateNestedManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesCreateNestedManyWithoutUsuarios_mensajes_remitente_idTousuariosInput
    psicologos?: psicologosCreateNestedOneWithoutUsuariosInput
    recomendaciones_empleado?: recomendaciones_empleadoCreateNestedManyWithoutUsuariosInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesCreateNestedManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesCreateNestedManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput
  }

  export type usuariosUncheckedCreateWithoutCitas_citas_empleado_idTousuariosInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    checkins?: checkinsUncheckedCreateNestedManyWithoutUsuariosInput
    citas_citas_psicologo_idTousuarios?: citasUncheckedCreateNestedManyWithoutUsuarios_citas_psicologo_idTousuariosInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUncheckedCreateNestedManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUncheckedCreateNestedManyWithoutUsuarios_mensajes_remitente_idTousuariosInput
    psicologos?: psicologosUncheckedCreateNestedOneWithoutUsuariosInput
    recomendaciones_empleado?: recomendaciones_empleadoUncheckedCreateNestedManyWithoutUsuariosInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUncheckedCreateNestedManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUncheckedCreateNestedManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput
  }

  export type usuariosCreateOrConnectWithoutCitas_citas_empleado_idTousuariosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutCitas_citas_empleado_idTousuariosInput, usuariosUncheckedCreateWithoutCitas_citas_empleado_idTousuariosInput>
  }

  export type usuariosCreateWithoutCitas_citas_psicologo_idTousuariosInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    checkins?: checkinsCreateNestedManyWithoutUsuariosInput
    citas_citas_empleado_idTousuarios?: citasCreateNestedManyWithoutUsuarios_citas_empleado_idTousuariosInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesCreateNestedManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesCreateNestedManyWithoutUsuarios_mensajes_remitente_idTousuariosInput
    psicologos?: psicologosCreateNestedOneWithoutUsuariosInput
    recomendaciones_empleado?: recomendaciones_empleadoCreateNestedManyWithoutUsuariosInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesCreateNestedManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesCreateNestedManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput
  }

  export type usuariosUncheckedCreateWithoutCitas_citas_psicologo_idTousuariosInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    checkins?: checkinsUncheckedCreateNestedManyWithoutUsuariosInput
    citas_citas_empleado_idTousuarios?: citasUncheckedCreateNestedManyWithoutUsuarios_citas_empleado_idTousuariosInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUncheckedCreateNestedManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUncheckedCreateNestedManyWithoutUsuarios_mensajes_remitente_idTousuariosInput
    psicologos?: psicologosUncheckedCreateNestedOneWithoutUsuariosInput
    recomendaciones_empleado?: recomendaciones_empleadoUncheckedCreateNestedManyWithoutUsuariosInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUncheckedCreateNestedManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUncheckedCreateNestedManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput
  }

  export type usuariosCreateOrConnectWithoutCitas_citas_psicologo_idTousuariosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutCitas_citas_psicologo_idTousuariosInput, usuariosUncheckedCreateWithoutCitas_citas_psicologo_idTousuariosInput>
  }

  export type valoracionesCreateWithoutCitasInput = {
    id?: string
    puntuacion: number
    comentario?: string | null
    creado_en?: Date | string | null
    usuarios_valoraciones_empleado_idTousuarios: usuariosCreateNestedOneWithoutValoraciones_valoraciones_empleado_idTousuariosInput
    usuarios_valoraciones_psicologo_idTousuarios: usuariosCreateNestedOneWithoutValoraciones_valoraciones_psicologo_idTousuariosInput
  }

  export type valoracionesUncheckedCreateWithoutCitasInput = {
    id?: string
    empleado_id: string
    psicologo_id: string
    puntuacion: number
    comentario?: string | null
    creado_en?: Date | string | null
  }

  export type valoracionesCreateOrConnectWithoutCitasInput = {
    where: valoracionesWhereUniqueInput
    create: XOR<valoracionesCreateWithoutCitasInput, valoracionesUncheckedCreateWithoutCitasInput>
  }

  export type valoracionesCreateManyCitasInputEnvelope = {
    data: valoracionesCreateManyCitasInput | valoracionesCreateManyCitasInput[]
    skipDuplicates?: boolean
  }

  export type usuariosUpsertWithoutCitas_citas_empleado_idTousuariosInput = {
    update: XOR<usuariosUpdateWithoutCitas_citas_empleado_idTousuariosInput, usuariosUncheckedUpdateWithoutCitas_citas_empleado_idTousuariosInput>
    create: XOR<usuariosCreateWithoutCitas_citas_empleado_idTousuariosInput, usuariosUncheckedCreateWithoutCitas_citas_empleado_idTousuariosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutCitas_citas_empleado_idTousuariosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutCitas_citas_empleado_idTousuariosInput, usuariosUncheckedUpdateWithoutCitas_citas_empleado_idTousuariosInput>
  }

  export type usuariosUpdateWithoutCitas_citas_empleado_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkins?: checkinsUpdateManyWithoutUsuariosNestedInput
    citas_citas_psicologo_idTousuarios?: citasUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosNestedInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosNestedInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosNestedInput
    psicologos?: psicologosUpdateOneWithoutUsuariosNestedInput
    recomendaciones_empleado?: recomendaciones_empleadoUpdateManyWithoutUsuariosNestedInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosNestedInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutCitas_citas_empleado_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkins?: checkinsUncheckedUpdateManyWithoutUsuariosNestedInput
    citas_citas_psicologo_idTousuarios?: citasUncheckedUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosNestedInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosNestedInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosNestedInput
    psicologos?: psicologosUncheckedUpdateOneWithoutUsuariosNestedInput
    recomendaciones_empleado?: recomendaciones_empleadoUncheckedUpdateManyWithoutUsuariosNestedInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosNestedInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type usuariosUpsertWithoutCitas_citas_psicologo_idTousuariosInput = {
    update: XOR<usuariosUpdateWithoutCitas_citas_psicologo_idTousuariosInput, usuariosUncheckedUpdateWithoutCitas_citas_psicologo_idTousuariosInput>
    create: XOR<usuariosCreateWithoutCitas_citas_psicologo_idTousuariosInput, usuariosUncheckedCreateWithoutCitas_citas_psicologo_idTousuariosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutCitas_citas_psicologo_idTousuariosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutCitas_citas_psicologo_idTousuariosInput, usuariosUncheckedUpdateWithoutCitas_citas_psicologo_idTousuariosInput>
  }

  export type usuariosUpdateWithoutCitas_citas_psicologo_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkins?: checkinsUpdateManyWithoutUsuariosNestedInput
    citas_citas_empleado_idTousuarios?: citasUpdateManyWithoutUsuarios_citas_empleado_idTousuariosNestedInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosNestedInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosNestedInput
    psicologos?: psicologosUpdateOneWithoutUsuariosNestedInput
    recomendaciones_empleado?: recomendaciones_empleadoUpdateManyWithoutUsuariosNestedInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosNestedInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutCitas_citas_psicologo_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkins?: checkinsUncheckedUpdateManyWithoutUsuariosNestedInput
    citas_citas_empleado_idTousuarios?: citasUncheckedUpdateManyWithoutUsuarios_citas_empleado_idTousuariosNestedInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosNestedInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosNestedInput
    psicologos?: psicologosUncheckedUpdateOneWithoutUsuariosNestedInput
    recomendaciones_empleado?: recomendaciones_empleadoUncheckedUpdateManyWithoutUsuariosNestedInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosNestedInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type valoracionesUpsertWithWhereUniqueWithoutCitasInput = {
    where: valoracionesWhereUniqueInput
    update: XOR<valoracionesUpdateWithoutCitasInput, valoracionesUncheckedUpdateWithoutCitasInput>
    create: XOR<valoracionesCreateWithoutCitasInput, valoracionesUncheckedCreateWithoutCitasInput>
  }

  export type valoracionesUpdateWithWhereUniqueWithoutCitasInput = {
    where: valoracionesWhereUniqueInput
    data: XOR<valoracionesUpdateWithoutCitasInput, valoracionesUncheckedUpdateWithoutCitasInput>
  }

  export type valoracionesUpdateManyWithWhereWithoutCitasInput = {
    where: valoracionesScalarWhereInput
    data: XOR<valoracionesUpdateManyMutationInput, valoracionesUncheckedUpdateManyWithoutCitasInput>
  }

  export type valoracionesScalarWhereInput = {
    AND?: valoracionesScalarWhereInput | valoracionesScalarWhereInput[]
    OR?: valoracionesScalarWhereInput[]
    NOT?: valoracionesScalarWhereInput | valoracionesScalarWhereInput[]
    id?: UuidFilter<"valoraciones"> | string
    empleado_id?: UuidFilter<"valoraciones"> | string
    psicologo_id?: UuidFilter<"valoraciones"> | string
    cita_id?: UuidFilter<"valoraciones"> | string
    puntuacion?: IntFilter<"valoraciones"> | number
    comentario?: StringNullableFilter<"valoraciones"> | string | null
    creado_en?: DateTimeNullableFilter<"valoraciones"> | Date | string | null
  }

  export type usuariosCreateWithoutMensajes_mensajes_destinatario_idTousuariosInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    checkins?: checkinsCreateNestedManyWithoutUsuariosInput
    citas_citas_empleado_idTousuarios?: citasCreateNestedManyWithoutUsuarios_citas_empleado_idTousuariosInput
    citas_citas_psicologo_idTousuarios?: citasCreateNestedManyWithoutUsuarios_citas_psicologo_idTousuariosInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesCreateNestedManyWithoutUsuarios_mensajes_remitente_idTousuariosInput
    psicologos?: psicologosCreateNestedOneWithoutUsuariosInput
    recomendaciones_empleado?: recomendaciones_empleadoCreateNestedManyWithoutUsuariosInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesCreateNestedManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesCreateNestedManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput
  }

  export type usuariosUncheckedCreateWithoutMensajes_mensajes_destinatario_idTousuariosInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    checkins?: checkinsUncheckedCreateNestedManyWithoutUsuariosInput
    citas_citas_empleado_idTousuarios?: citasUncheckedCreateNestedManyWithoutUsuarios_citas_empleado_idTousuariosInput
    citas_citas_psicologo_idTousuarios?: citasUncheckedCreateNestedManyWithoutUsuarios_citas_psicologo_idTousuariosInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUncheckedCreateNestedManyWithoutUsuarios_mensajes_remitente_idTousuariosInput
    psicologos?: psicologosUncheckedCreateNestedOneWithoutUsuariosInput
    recomendaciones_empleado?: recomendaciones_empleadoUncheckedCreateNestedManyWithoutUsuariosInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUncheckedCreateNestedManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUncheckedCreateNestedManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput
  }

  export type usuariosCreateOrConnectWithoutMensajes_mensajes_destinatario_idTousuariosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutMensajes_mensajes_destinatario_idTousuariosInput, usuariosUncheckedCreateWithoutMensajes_mensajes_destinatario_idTousuariosInput>
  }

  export type usuariosCreateWithoutMensajes_mensajes_remitente_idTousuariosInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    checkins?: checkinsCreateNestedManyWithoutUsuariosInput
    citas_citas_empleado_idTousuarios?: citasCreateNestedManyWithoutUsuarios_citas_empleado_idTousuariosInput
    citas_citas_psicologo_idTousuarios?: citasCreateNestedManyWithoutUsuarios_citas_psicologo_idTousuariosInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesCreateNestedManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput
    psicologos?: psicologosCreateNestedOneWithoutUsuariosInput
    recomendaciones_empleado?: recomendaciones_empleadoCreateNestedManyWithoutUsuariosInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesCreateNestedManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesCreateNestedManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput
  }

  export type usuariosUncheckedCreateWithoutMensajes_mensajes_remitente_idTousuariosInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    checkins?: checkinsUncheckedCreateNestedManyWithoutUsuariosInput
    citas_citas_empleado_idTousuarios?: citasUncheckedCreateNestedManyWithoutUsuarios_citas_empleado_idTousuariosInput
    citas_citas_psicologo_idTousuarios?: citasUncheckedCreateNestedManyWithoutUsuarios_citas_psicologo_idTousuariosInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUncheckedCreateNestedManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput
    psicologos?: psicologosUncheckedCreateNestedOneWithoutUsuariosInput
    recomendaciones_empleado?: recomendaciones_empleadoUncheckedCreateNestedManyWithoutUsuariosInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUncheckedCreateNestedManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUncheckedCreateNestedManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput
  }

  export type usuariosCreateOrConnectWithoutMensajes_mensajes_remitente_idTousuariosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutMensajes_mensajes_remitente_idTousuariosInput, usuariosUncheckedCreateWithoutMensajes_mensajes_remitente_idTousuariosInput>
  }

  export type usuariosUpsertWithoutMensajes_mensajes_destinatario_idTousuariosInput = {
    update: XOR<usuariosUpdateWithoutMensajes_mensajes_destinatario_idTousuariosInput, usuariosUncheckedUpdateWithoutMensajes_mensajes_destinatario_idTousuariosInput>
    create: XOR<usuariosCreateWithoutMensajes_mensajes_destinatario_idTousuariosInput, usuariosUncheckedCreateWithoutMensajes_mensajes_destinatario_idTousuariosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutMensajes_mensajes_destinatario_idTousuariosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutMensajes_mensajes_destinatario_idTousuariosInput, usuariosUncheckedUpdateWithoutMensajes_mensajes_destinatario_idTousuariosInput>
  }

  export type usuariosUpdateWithoutMensajes_mensajes_destinatario_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkins?: checkinsUpdateManyWithoutUsuariosNestedInput
    citas_citas_empleado_idTousuarios?: citasUpdateManyWithoutUsuarios_citas_empleado_idTousuariosNestedInput
    citas_citas_psicologo_idTousuarios?: citasUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosNestedInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosNestedInput
    psicologos?: psicologosUpdateOneWithoutUsuariosNestedInput
    recomendaciones_empleado?: recomendaciones_empleadoUpdateManyWithoutUsuariosNestedInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosNestedInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutMensajes_mensajes_destinatario_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkins?: checkinsUncheckedUpdateManyWithoutUsuariosNestedInput
    citas_citas_empleado_idTousuarios?: citasUncheckedUpdateManyWithoutUsuarios_citas_empleado_idTousuariosNestedInput
    citas_citas_psicologo_idTousuarios?: citasUncheckedUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosNestedInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosNestedInput
    psicologos?: psicologosUncheckedUpdateOneWithoutUsuariosNestedInput
    recomendaciones_empleado?: recomendaciones_empleadoUncheckedUpdateManyWithoutUsuariosNestedInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosNestedInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type usuariosUpsertWithoutMensajes_mensajes_remitente_idTousuariosInput = {
    update: XOR<usuariosUpdateWithoutMensajes_mensajes_remitente_idTousuariosInput, usuariosUncheckedUpdateWithoutMensajes_mensajes_remitente_idTousuariosInput>
    create: XOR<usuariosCreateWithoutMensajes_mensajes_remitente_idTousuariosInput, usuariosUncheckedCreateWithoutMensajes_mensajes_remitente_idTousuariosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutMensajes_mensajes_remitente_idTousuariosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutMensajes_mensajes_remitente_idTousuariosInput, usuariosUncheckedUpdateWithoutMensajes_mensajes_remitente_idTousuariosInput>
  }

  export type usuariosUpdateWithoutMensajes_mensajes_remitente_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkins?: checkinsUpdateManyWithoutUsuariosNestedInput
    citas_citas_empleado_idTousuarios?: citasUpdateManyWithoutUsuarios_citas_empleado_idTousuariosNestedInput
    citas_citas_psicologo_idTousuarios?: citasUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosNestedInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosNestedInput
    psicologos?: psicologosUpdateOneWithoutUsuariosNestedInput
    recomendaciones_empleado?: recomendaciones_empleadoUpdateManyWithoutUsuariosNestedInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosNestedInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutMensajes_mensajes_remitente_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkins?: checkinsUncheckedUpdateManyWithoutUsuariosNestedInput
    citas_citas_empleado_idTousuarios?: citasUncheckedUpdateManyWithoutUsuarios_citas_empleado_idTousuariosNestedInput
    citas_citas_psicologo_idTousuarios?: citasUncheckedUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosNestedInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosNestedInput
    psicologos?: psicologosUncheckedUpdateOneWithoutUsuariosNestedInput
    recomendaciones_empleado?: recomendaciones_empleadoUncheckedUpdateManyWithoutUsuariosNestedInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosNestedInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type usuariosCreateWithoutPsicologosInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    checkins?: checkinsCreateNestedManyWithoutUsuariosInput
    citas_citas_empleado_idTousuarios?: citasCreateNestedManyWithoutUsuarios_citas_empleado_idTousuariosInput
    citas_citas_psicologo_idTousuarios?: citasCreateNestedManyWithoutUsuarios_citas_psicologo_idTousuariosInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesCreateNestedManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesCreateNestedManyWithoutUsuarios_mensajes_remitente_idTousuariosInput
    recomendaciones_empleado?: recomendaciones_empleadoCreateNestedManyWithoutUsuariosInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesCreateNestedManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesCreateNestedManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput
  }

  export type usuariosUncheckedCreateWithoutPsicologosInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    checkins?: checkinsUncheckedCreateNestedManyWithoutUsuariosInput
    citas_citas_empleado_idTousuarios?: citasUncheckedCreateNestedManyWithoutUsuarios_citas_empleado_idTousuariosInput
    citas_citas_psicologo_idTousuarios?: citasUncheckedCreateNestedManyWithoutUsuarios_citas_psicologo_idTousuariosInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUncheckedCreateNestedManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUncheckedCreateNestedManyWithoutUsuarios_mensajes_remitente_idTousuariosInput
    recomendaciones_empleado?: recomendaciones_empleadoUncheckedCreateNestedManyWithoutUsuariosInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUncheckedCreateNestedManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUncheckedCreateNestedManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput
  }

  export type usuariosCreateOrConnectWithoutPsicologosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutPsicologosInput, usuariosUncheckedCreateWithoutPsicologosInput>
  }

  export type usuariosUpsertWithoutPsicologosInput = {
    update: XOR<usuariosUpdateWithoutPsicologosInput, usuariosUncheckedUpdateWithoutPsicologosInput>
    create: XOR<usuariosCreateWithoutPsicologosInput, usuariosUncheckedCreateWithoutPsicologosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutPsicologosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutPsicologosInput, usuariosUncheckedUpdateWithoutPsicologosInput>
  }

  export type usuariosUpdateWithoutPsicologosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkins?: checkinsUpdateManyWithoutUsuariosNestedInput
    citas_citas_empleado_idTousuarios?: citasUpdateManyWithoutUsuarios_citas_empleado_idTousuariosNestedInput
    citas_citas_psicologo_idTousuarios?: citasUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosNestedInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosNestedInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosNestedInput
    recomendaciones_empleado?: recomendaciones_empleadoUpdateManyWithoutUsuariosNestedInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosNestedInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutPsicologosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkins?: checkinsUncheckedUpdateManyWithoutUsuariosNestedInput
    citas_citas_empleado_idTousuarios?: citasUncheckedUpdateManyWithoutUsuarios_citas_empleado_idTousuariosNestedInput
    citas_citas_psicologo_idTousuarios?: citasUncheckedUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosNestedInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosNestedInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosNestedInput
    recomendaciones_empleado?: recomendaciones_empleadoUncheckedUpdateManyWithoutUsuariosNestedInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosNestedInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type recomendaciones_empleadoCreateWithoutRecomendacionesInput = {
    id?: string
    completado?: boolean | null
    completado_en?: Date | string | null
    asignado_en?: Date | string | null
    usuarios: usuariosCreateNestedOneWithoutRecomendaciones_empleadoInput
  }

  export type recomendaciones_empleadoUncheckedCreateWithoutRecomendacionesInput = {
    id?: string
    empleado_id: string
    completado?: boolean | null
    completado_en?: Date | string | null
    asignado_en?: Date | string | null
  }

  export type recomendaciones_empleadoCreateOrConnectWithoutRecomendacionesInput = {
    where: recomendaciones_empleadoWhereUniqueInput
    create: XOR<recomendaciones_empleadoCreateWithoutRecomendacionesInput, recomendaciones_empleadoUncheckedCreateWithoutRecomendacionesInput>
  }

  export type recomendaciones_empleadoCreateManyRecomendacionesInputEnvelope = {
    data: recomendaciones_empleadoCreateManyRecomendacionesInput | recomendaciones_empleadoCreateManyRecomendacionesInput[]
    skipDuplicates?: boolean
  }

  export type recomendaciones_empleadoUpsertWithWhereUniqueWithoutRecomendacionesInput = {
    where: recomendaciones_empleadoWhereUniqueInput
    update: XOR<recomendaciones_empleadoUpdateWithoutRecomendacionesInput, recomendaciones_empleadoUncheckedUpdateWithoutRecomendacionesInput>
    create: XOR<recomendaciones_empleadoCreateWithoutRecomendacionesInput, recomendaciones_empleadoUncheckedCreateWithoutRecomendacionesInput>
  }

  export type recomendaciones_empleadoUpdateWithWhereUniqueWithoutRecomendacionesInput = {
    where: recomendaciones_empleadoWhereUniqueInput
    data: XOR<recomendaciones_empleadoUpdateWithoutRecomendacionesInput, recomendaciones_empleadoUncheckedUpdateWithoutRecomendacionesInput>
  }

  export type recomendaciones_empleadoUpdateManyWithWhereWithoutRecomendacionesInput = {
    where: recomendaciones_empleadoScalarWhereInput
    data: XOR<recomendaciones_empleadoUpdateManyMutationInput, recomendaciones_empleadoUncheckedUpdateManyWithoutRecomendacionesInput>
  }

  export type recomendaciones_empleadoScalarWhereInput = {
    AND?: recomendaciones_empleadoScalarWhereInput | recomendaciones_empleadoScalarWhereInput[]
    OR?: recomendaciones_empleadoScalarWhereInput[]
    NOT?: recomendaciones_empleadoScalarWhereInput | recomendaciones_empleadoScalarWhereInput[]
    id?: UuidFilter<"recomendaciones_empleado"> | string
    empleado_id?: UuidFilter<"recomendaciones_empleado"> | string
    recomendacion_id?: UuidFilter<"recomendaciones_empleado"> | string
    completado?: BoolNullableFilter<"recomendaciones_empleado"> | boolean | null
    completado_en?: DateTimeNullableFilter<"recomendaciones_empleado"> | Date | string | null
    asignado_en?: DateTimeNullableFilter<"recomendaciones_empleado"> | Date | string | null
  }

  export type usuariosCreateWithoutRecomendaciones_empleadoInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    checkins?: checkinsCreateNestedManyWithoutUsuariosInput
    citas_citas_empleado_idTousuarios?: citasCreateNestedManyWithoutUsuarios_citas_empleado_idTousuariosInput
    citas_citas_psicologo_idTousuarios?: citasCreateNestedManyWithoutUsuarios_citas_psicologo_idTousuariosInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesCreateNestedManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesCreateNestedManyWithoutUsuarios_mensajes_remitente_idTousuariosInput
    psicologos?: psicologosCreateNestedOneWithoutUsuariosInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesCreateNestedManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesCreateNestedManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput
  }

  export type usuariosUncheckedCreateWithoutRecomendaciones_empleadoInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    checkins?: checkinsUncheckedCreateNestedManyWithoutUsuariosInput
    citas_citas_empleado_idTousuarios?: citasUncheckedCreateNestedManyWithoutUsuarios_citas_empleado_idTousuariosInput
    citas_citas_psicologo_idTousuarios?: citasUncheckedCreateNestedManyWithoutUsuarios_citas_psicologo_idTousuariosInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUncheckedCreateNestedManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUncheckedCreateNestedManyWithoutUsuarios_mensajes_remitente_idTousuariosInput
    psicologos?: psicologosUncheckedCreateNestedOneWithoutUsuariosInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUncheckedCreateNestedManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUncheckedCreateNestedManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput
  }

  export type usuariosCreateOrConnectWithoutRecomendaciones_empleadoInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutRecomendaciones_empleadoInput, usuariosUncheckedCreateWithoutRecomendaciones_empleadoInput>
  }

  export type recomendacionesCreateWithoutRecomendaciones_empleadoInput = {
    id?: string
    titulo: string
    descripcion?: string | null
    tipo?: string | null
    url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
  }

  export type recomendacionesUncheckedCreateWithoutRecomendaciones_empleadoInput = {
    id?: string
    titulo: string
    descripcion?: string | null
    tipo?: string | null
    url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
  }

  export type recomendacionesCreateOrConnectWithoutRecomendaciones_empleadoInput = {
    where: recomendacionesWhereUniqueInput
    create: XOR<recomendacionesCreateWithoutRecomendaciones_empleadoInput, recomendacionesUncheckedCreateWithoutRecomendaciones_empleadoInput>
  }

  export type usuariosUpsertWithoutRecomendaciones_empleadoInput = {
    update: XOR<usuariosUpdateWithoutRecomendaciones_empleadoInput, usuariosUncheckedUpdateWithoutRecomendaciones_empleadoInput>
    create: XOR<usuariosCreateWithoutRecomendaciones_empleadoInput, usuariosUncheckedCreateWithoutRecomendaciones_empleadoInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutRecomendaciones_empleadoInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutRecomendaciones_empleadoInput, usuariosUncheckedUpdateWithoutRecomendaciones_empleadoInput>
  }

  export type usuariosUpdateWithoutRecomendaciones_empleadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkins?: checkinsUpdateManyWithoutUsuariosNestedInput
    citas_citas_empleado_idTousuarios?: citasUpdateManyWithoutUsuarios_citas_empleado_idTousuariosNestedInput
    citas_citas_psicologo_idTousuarios?: citasUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosNestedInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosNestedInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosNestedInput
    psicologos?: psicologosUpdateOneWithoutUsuariosNestedInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosNestedInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutRecomendaciones_empleadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkins?: checkinsUncheckedUpdateManyWithoutUsuariosNestedInput
    citas_citas_empleado_idTousuarios?: citasUncheckedUpdateManyWithoutUsuarios_citas_empleado_idTousuariosNestedInput
    citas_citas_psicologo_idTousuarios?: citasUncheckedUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosNestedInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosNestedInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosNestedInput
    psicologos?: psicologosUncheckedUpdateOneWithoutUsuariosNestedInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosNestedInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type recomendacionesUpsertWithoutRecomendaciones_empleadoInput = {
    update: XOR<recomendacionesUpdateWithoutRecomendaciones_empleadoInput, recomendacionesUncheckedUpdateWithoutRecomendaciones_empleadoInput>
    create: XOR<recomendacionesCreateWithoutRecomendaciones_empleadoInput, recomendacionesUncheckedCreateWithoutRecomendaciones_empleadoInput>
    where?: recomendacionesWhereInput
  }

  export type recomendacionesUpdateToOneWithWhereWithoutRecomendaciones_empleadoInput = {
    where?: recomendacionesWhereInput
    data: XOR<recomendacionesUpdateWithoutRecomendaciones_empleadoInput, recomendacionesUncheckedUpdateWithoutRecomendaciones_empleadoInput>
  }

  export type recomendacionesUpdateWithoutRecomendaciones_empleadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recomendacionesUncheckedUpdateWithoutRecomendaciones_empleadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type checkinsCreateWithoutUsuariosInput = {
    id?: string
    fecha?: Date | string
    estado_animo: number
    nivel_estres: number
    horas_sueno?: Decimal | DecimalJsLike | number | string | null
    notas?: string | null
    creado_en?: Date | string | null
  }

  export type checkinsUncheckedCreateWithoutUsuariosInput = {
    id?: string
    fecha?: Date | string
    estado_animo: number
    nivel_estres: number
    horas_sueno?: Decimal | DecimalJsLike | number | string | null
    notas?: string | null
    creado_en?: Date | string | null
  }

  export type checkinsCreateOrConnectWithoutUsuariosInput = {
    where: checkinsWhereUniqueInput
    create: XOR<checkinsCreateWithoutUsuariosInput, checkinsUncheckedCreateWithoutUsuariosInput>
  }

  export type checkinsCreateManyUsuariosInputEnvelope = {
    data: checkinsCreateManyUsuariosInput | checkinsCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type citasCreateWithoutUsuarios_citas_empleado_idTousuariosInput = {
    id?: string
    fecha_hora: Date | string
    duracion_minutos?: number | null
    estado?: string | null
    notas?: string | null
    link_reunion?: string | null
    creado_en?: Date | string | null
    usuarios_citas_psicologo_idTousuarios: usuariosCreateNestedOneWithoutCitas_citas_psicologo_idTousuariosInput
    valoraciones?: valoracionesCreateNestedManyWithoutCitasInput
  }

  export type citasUncheckedCreateWithoutUsuarios_citas_empleado_idTousuariosInput = {
    id?: string
    psicologo_id: string
    fecha_hora: Date | string
    duracion_minutos?: number | null
    estado?: string | null
    notas?: string | null
    link_reunion?: string | null
    creado_en?: Date | string | null
    valoraciones?: valoracionesUncheckedCreateNestedManyWithoutCitasInput
  }

  export type citasCreateOrConnectWithoutUsuarios_citas_empleado_idTousuariosInput = {
    where: citasWhereUniqueInput
    create: XOR<citasCreateWithoutUsuarios_citas_empleado_idTousuariosInput, citasUncheckedCreateWithoutUsuarios_citas_empleado_idTousuariosInput>
  }

  export type citasCreateManyUsuarios_citas_empleado_idTousuariosInputEnvelope = {
    data: citasCreateManyUsuarios_citas_empleado_idTousuariosInput | citasCreateManyUsuarios_citas_empleado_idTousuariosInput[]
    skipDuplicates?: boolean
  }

  export type citasCreateWithoutUsuarios_citas_psicologo_idTousuariosInput = {
    id?: string
    fecha_hora: Date | string
    duracion_minutos?: number | null
    estado?: string | null
    notas?: string | null
    link_reunion?: string | null
    creado_en?: Date | string | null
    usuarios_citas_empleado_idTousuarios: usuariosCreateNestedOneWithoutCitas_citas_empleado_idTousuariosInput
    valoraciones?: valoracionesCreateNestedManyWithoutCitasInput
  }

  export type citasUncheckedCreateWithoutUsuarios_citas_psicologo_idTousuariosInput = {
    id?: string
    empleado_id: string
    fecha_hora: Date | string
    duracion_minutos?: number | null
    estado?: string | null
    notas?: string | null
    link_reunion?: string | null
    creado_en?: Date | string | null
    valoraciones?: valoracionesUncheckedCreateNestedManyWithoutCitasInput
  }

  export type citasCreateOrConnectWithoutUsuarios_citas_psicologo_idTousuariosInput = {
    where: citasWhereUniqueInput
    create: XOR<citasCreateWithoutUsuarios_citas_psicologo_idTousuariosInput, citasUncheckedCreateWithoutUsuarios_citas_psicologo_idTousuariosInput>
  }

  export type citasCreateManyUsuarios_citas_psicologo_idTousuariosInputEnvelope = {
    data: citasCreateManyUsuarios_citas_psicologo_idTousuariosInput | citasCreateManyUsuarios_citas_psicologo_idTousuariosInput[]
    skipDuplicates?: boolean
  }

  export type mensajesCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput = {
    id?: string
    contenido: string
    leido?: boolean | null
    creado_en?: Date | string | null
    usuarios_mensajes_remitente_idTousuarios: usuariosCreateNestedOneWithoutMensajes_mensajes_remitente_idTousuariosInput
  }

  export type mensajesUncheckedCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput = {
    id?: string
    remitente_id: string
    contenido: string
    leido?: boolean | null
    creado_en?: Date | string | null
  }

  export type mensajesCreateOrConnectWithoutUsuarios_mensajes_destinatario_idTousuariosInput = {
    where: mensajesWhereUniqueInput
    create: XOR<mensajesCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput, mensajesUncheckedCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput>
  }

  export type mensajesCreateManyUsuarios_mensajes_destinatario_idTousuariosInputEnvelope = {
    data: mensajesCreateManyUsuarios_mensajes_destinatario_idTousuariosInput | mensajesCreateManyUsuarios_mensajes_destinatario_idTousuariosInput[]
    skipDuplicates?: boolean
  }

  export type mensajesCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput = {
    id?: string
    contenido: string
    leido?: boolean | null
    creado_en?: Date | string | null
    usuarios_mensajes_destinatario_idTousuarios: usuariosCreateNestedOneWithoutMensajes_mensajes_destinatario_idTousuariosInput
  }

  export type mensajesUncheckedCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput = {
    id?: string
    destinatario_id: string
    contenido: string
    leido?: boolean | null
    creado_en?: Date | string | null
  }

  export type mensajesCreateOrConnectWithoutUsuarios_mensajes_remitente_idTousuariosInput = {
    where: mensajesWhereUniqueInput
    create: XOR<mensajesCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput, mensajesUncheckedCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput>
  }

  export type mensajesCreateManyUsuarios_mensajes_remitente_idTousuariosInputEnvelope = {
    data: mensajesCreateManyUsuarios_mensajes_remitente_idTousuariosInput | mensajesCreateManyUsuarios_mensajes_remitente_idTousuariosInput[]
    skipDuplicates?: boolean
  }

  export type psicologosCreateWithoutUsuariosInput = {
    numero_licencia: string
    especialidad?: string | null
    a_os_experiencia?: number | null
    biografia?: string | null
  }

  export type psicologosUncheckedCreateWithoutUsuariosInput = {
    numero_licencia: string
    especialidad?: string | null
    a_os_experiencia?: number | null
    biografia?: string | null
  }

  export type psicologosCreateOrConnectWithoutUsuariosInput = {
    where: psicologosWhereUniqueInput
    create: XOR<psicologosCreateWithoutUsuariosInput, psicologosUncheckedCreateWithoutUsuariosInput>
  }

  export type recomendaciones_empleadoCreateWithoutUsuariosInput = {
    id?: string
    completado?: boolean | null
    completado_en?: Date | string | null
    asignado_en?: Date | string | null
    recomendaciones: recomendacionesCreateNestedOneWithoutRecomendaciones_empleadoInput
  }

  export type recomendaciones_empleadoUncheckedCreateWithoutUsuariosInput = {
    id?: string
    recomendacion_id: string
    completado?: boolean | null
    completado_en?: Date | string | null
    asignado_en?: Date | string | null
  }

  export type recomendaciones_empleadoCreateOrConnectWithoutUsuariosInput = {
    where: recomendaciones_empleadoWhereUniqueInput
    create: XOR<recomendaciones_empleadoCreateWithoutUsuariosInput, recomendaciones_empleadoUncheckedCreateWithoutUsuariosInput>
  }

  export type recomendaciones_empleadoCreateManyUsuariosInputEnvelope = {
    data: recomendaciones_empleadoCreateManyUsuariosInput | recomendaciones_empleadoCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type valoracionesCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput = {
    id?: string
    puntuacion: number
    comentario?: string | null
    creado_en?: Date | string | null
    citas: citasCreateNestedOneWithoutValoracionesInput
    usuarios_valoraciones_psicologo_idTousuarios: usuariosCreateNestedOneWithoutValoraciones_valoraciones_psicologo_idTousuariosInput
  }

  export type valoracionesUncheckedCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput = {
    id?: string
    psicologo_id: string
    cita_id: string
    puntuacion: number
    comentario?: string | null
    creado_en?: Date | string | null
  }

  export type valoracionesCreateOrConnectWithoutUsuarios_valoraciones_empleado_idTousuariosInput = {
    where: valoracionesWhereUniqueInput
    create: XOR<valoracionesCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput, valoracionesUncheckedCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput>
  }

  export type valoracionesCreateManyUsuarios_valoraciones_empleado_idTousuariosInputEnvelope = {
    data: valoracionesCreateManyUsuarios_valoraciones_empleado_idTousuariosInput | valoracionesCreateManyUsuarios_valoraciones_empleado_idTousuariosInput[]
    skipDuplicates?: boolean
  }

  export type valoracionesCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput = {
    id?: string
    puntuacion: number
    comentario?: string | null
    creado_en?: Date | string | null
    citas: citasCreateNestedOneWithoutValoracionesInput
    usuarios_valoraciones_empleado_idTousuarios: usuariosCreateNestedOneWithoutValoraciones_valoraciones_empleado_idTousuariosInput
  }

  export type valoracionesUncheckedCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput = {
    id?: string
    empleado_id: string
    cita_id: string
    puntuacion: number
    comentario?: string | null
    creado_en?: Date | string | null
  }

  export type valoracionesCreateOrConnectWithoutUsuarios_valoraciones_psicologo_idTousuariosInput = {
    where: valoracionesWhereUniqueInput
    create: XOR<valoracionesCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput, valoracionesUncheckedCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput>
  }

  export type valoracionesCreateManyUsuarios_valoraciones_psicologo_idTousuariosInputEnvelope = {
    data: valoracionesCreateManyUsuarios_valoraciones_psicologo_idTousuariosInput | valoracionesCreateManyUsuarios_valoraciones_psicologo_idTousuariosInput[]
    skipDuplicates?: boolean
  }

  export type checkinsUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: checkinsWhereUniqueInput
    update: XOR<checkinsUpdateWithoutUsuariosInput, checkinsUncheckedUpdateWithoutUsuariosInput>
    create: XOR<checkinsCreateWithoutUsuariosInput, checkinsUncheckedCreateWithoutUsuariosInput>
  }

  export type checkinsUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: checkinsWhereUniqueInput
    data: XOR<checkinsUpdateWithoutUsuariosInput, checkinsUncheckedUpdateWithoutUsuariosInput>
  }

  export type checkinsUpdateManyWithWhereWithoutUsuariosInput = {
    where: checkinsScalarWhereInput
    data: XOR<checkinsUpdateManyMutationInput, checkinsUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type checkinsScalarWhereInput = {
    AND?: checkinsScalarWhereInput | checkinsScalarWhereInput[]
    OR?: checkinsScalarWhereInput[]
    NOT?: checkinsScalarWhereInput | checkinsScalarWhereInput[]
    id?: UuidFilter<"checkins"> | string
    empleado_id?: UuidFilter<"checkins"> | string
    fecha?: DateTimeFilter<"checkins"> | Date | string
    estado_animo?: IntFilter<"checkins"> | number
    nivel_estres?: IntFilter<"checkins"> | number
    horas_sueno?: DecimalNullableFilter<"checkins"> | Decimal | DecimalJsLike | number | string | null
    notas?: StringNullableFilter<"checkins"> | string | null
    creado_en?: DateTimeNullableFilter<"checkins"> | Date | string | null
  }

  export type citasUpsertWithWhereUniqueWithoutUsuarios_citas_empleado_idTousuariosInput = {
    where: citasWhereUniqueInput
    update: XOR<citasUpdateWithoutUsuarios_citas_empleado_idTousuariosInput, citasUncheckedUpdateWithoutUsuarios_citas_empleado_idTousuariosInput>
    create: XOR<citasCreateWithoutUsuarios_citas_empleado_idTousuariosInput, citasUncheckedCreateWithoutUsuarios_citas_empleado_idTousuariosInput>
  }

  export type citasUpdateWithWhereUniqueWithoutUsuarios_citas_empleado_idTousuariosInput = {
    where: citasWhereUniqueInput
    data: XOR<citasUpdateWithoutUsuarios_citas_empleado_idTousuariosInput, citasUncheckedUpdateWithoutUsuarios_citas_empleado_idTousuariosInput>
  }

  export type citasUpdateManyWithWhereWithoutUsuarios_citas_empleado_idTousuariosInput = {
    where: citasScalarWhereInput
    data: XOR<citasUpdateManyMutationInput, citasUncheckedUpdateManyWithoutUsuarios_citas_empleado_idTousuariosInput>
  }

  export type citasScalarWhereInput = {
    AND?: citasScalarWhereInput | citasScalarWhereInput[]
    OR?: citasScalarWhereInput[]
    NOT?: citasScalarWhereInput | citasScalarWhereInput[]
    id?: UuidFilter<"citas"> | string
    empleado_id?: UuidFilter<"citas"> | string
    psicologo_id?: UuidFilter<"citas"> | string
    fecha_hora?: DateTimeFilter<"citas"> | Date | string
    duracion_minutos?: IntNullableFilter<"citas"> | number | null
    estado?: StringNullableFilter<"citas"> | string | null
    notas?: StringNullableFilter<"citas"> | string | null
    link_reunion?: StringNullableFilter<"citas"> | string | null
    creado_en?: DateTimeNullableFilter<"citas"> | Date | string | null
  }

  export type citasUpsertWithWhereUniqueWithoutUsuarios_citas_psicologo_idTousuariosInput = {
    where: citasWhereUniqueInput
    update: XOR<citasUpdateWithoutUsuarios_citas_psicologo_idTousuariosInput, citasUncheckedUpdateWithoutUsuarios_citas_psicologo_idTousuariosInput>
    create: XOR<citasCreateWithoutUsuarios_citas_psicologo_idTousuariosInput, citasUncheckedCreateWithoutUsuarios_citas_psicologo_idTousuariosInput>
  }

  export type citasUpdateWithWhereUniqueWithoutUsuarios_citas_psicologo_idTousuariosInput = {
    where: citasWhereUniqueInput
    data: XOR<citasUpdateWithoutUsuarios_citas_psicologo_idTousuariosInput, citasUncheckedUpdateWithoutUsuarios_citas_psicologo_idTousuariosInput>
  }

  export type citasUpdateManyWithWhereWithoutUsuarios_citas_psicologo_idTousuariosInput = {
    where: citasScalarWhereInput
    data: XOR<citasUpdateManyMutationInput, citasUncheckedUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosInput>
  }

  export type mensajesUpsertWithWhereUniqueWithoutUsuarios_mensajes_destinatario_idTousuariosInput = {
    where: mensajesWhereUniqueInput
    update: XOR<mensajesUpdateWithoutUsuarios_mensajes_destinatario_idTousuariosInput, mensajesUncheckedUpdateWithoutUsuarios_mensajes_destinatario_idTousuariosInput>
    create: XOR<mensajesCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput, mensajesUncheckedCreateWithoutUsuarios_mensajes_destinatario_idTousuariosInput>
  }

  export type mensajesUpdateWithWhereUniqueWithoutUsuarios_mensajes_destinatario_idTousuariosInput = {
    where: mensajesWhereUniqueInput
    data: XOR<mensajesUpdateWithoutUsuarios_mensajes_destinatario_idTousuariosInput, mensajesUncheckedUpdateWithoutUsuarios_mensajes_destinatario_idTousuariosInput>
  }

  export type mensajesUpdateManyWithWhereWithoutUsuarios_mensajes_destinatario_idTousuariosInput = {
    where: mensajesScalarWhereInput
    data: XOR<mensajesUpdateManyMutationInput, mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput>
  }

  export type mensajesScalarWhereInput = {
    AND?: mensajesScalarWhereInput | mensajesScalarWhereInput[]
    OR?: mensajesScalarWhereInput[]
    NOT?: mensajesScalarWhereInput | mensajesScalarWhereInput[]
    id?: UuidFilter<"mensajes"> | string
    remitente_id?: UuidFilter<"mensajes"> | string
    destinatario_id?: UuidFilter<"mensajes"> | string
    contenido?: StringFilter<"mensajes"> | string
    leido?: BoolNullableFilter<"mensajes"> | boolean | null
    creado_en?: DateTimeNullableFilter<"mensajes"> | Date | string | null
  }

  export type mensajesUpsertWithWhereUniqueWithoutUsuarios_mensajes_remitente_idTousuariosInput = {
    where: mensajesWhereUniqueInput
    update: XOR<mensajesUpdateWithoutUsuarios_mensajes_remitente_idTousuariosInput, mensajesUncheckedUpdateWithoutUsuarios_mensajes_remitente_idTousuariosInput>
    create: XOR<mensajesCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput, mensajesUncheckedCreateWithoutUsuarios_mensajes_remitente_idTousuariosInput>
  }

  export type mensajesUpdateWithWhereUniqueWithoutUsuarios_mensajes_remitente_idTousuariosInput = {
    where: mensajesWhereUniqueInput
    data: XOR<mensajesUpdateWithoutUsuarios_mensajes_remitente_idTousuariosInput, mensajesUncheckedUpdateWithoutUsuarios_mensajes_remitente_idTousuariosInput>
  }

  export type mensajesUpdateManyWithWhereWithoutUsuarios_mensajes_remitente_idTousuariosInput = {
    where: mensajesScalarWhereInput
    data: XOR<mensajesUpdateManyMutationInput, mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosInput>
  }

  export type psicologosUpsertWithoutUsuariosInput = {
    update: XOR<psicologosUpdateWithoutUsuariosInput, psicologosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<psicologosCreateWithoutUsuariosInput, psicologosUncheckedCreateWithoutUsuariosInput>
    where?: psicologosWhereInput
  }

  export type psicologosUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: psicologosWhereInput
    data: XOR<psicologosUpdateWithoutUsuariosInput, psicologosUncheckedUpdateWithoutUsuariosInput>
  }

  export type psicologosUpdateWithoutUsuariosInput = {
    numero_licencia?: StringFieldUpdateOperationsInput | string
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    a_os_experiencia?: NullableIntFieldUpdateOperationsInput | number | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type psicologosUncheckedUpdateWithoutUsuariosInput = {
    numero_licencia?: StringFieldUpdateOperationsInput | string
    especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    a_os_experiencia?: NullableIntFieldUpdateOperationsInput | number | null
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type recomendaciones_empleadoUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: recomendaciones_empleadoWhereUniqueInput
    update: XOR<recomendaciones_empleadoUpdateWithoutUsuariosInput, recomendaciones_empleadoUncheckedUpdateWithoutUsuariosInput>
    create: XOR<recomendaciones_empleadoCreateWithoutUsuariosInput, recomendaciones_empleadoUncheckedCreateWithoutUsuariosInput>
  }

  export type recomendaciones_empleadoUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: recomendaciones_empleadoWhereUniqueInput
    data: XOR<recomendaciones_empleadoUpdateWithoutUsuariosInput, recomendaciones_empleadoUncheckedUpdateWithoutUsuariosInput>
  }

  export type recomendaciones_empleadoUpdateManyWithWhereWithoutUsuariosInput = {
    where: recomendaciones_empleadoScalarWhereInput
    data: XOR<recomendaciones_empleadoUpdateManyMutationInput, recomendaciones_empleadoUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type valoracionesUpsertWithWhereUniqueWithoutUsuarios_valoraciones_empleado_idTousuariosInput = {
    where: valoracionesWhereUniqueInput
    update: XOR<valoracionesUpdateWithoutUsuarios_valoraciones_empleado_idTousuariosInput, valoracionesUncheckedUpdateWithoutUsuarios_valoraciones_empleado_idTousuariosInput>
    create: XOR<valoracionesCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput, valoracionesUncheckedCreateWithoutUsuarios_valoraciones_empleado_idTousuariosInput>
  }

  export type valoracionesUpdateWithWhereUniqueWithoutUsuarios_valoraciones_empleado_idTousuariosInput = {
    where: valoracionesWhereUniqueInput
    data: XOR<valoracionesUpdateWithoutUsuarios_valoraciones_empleado_idTousuariosInput, valoracionesUncheckedUpdateWithoutUsuarios_valoraciones_empleado_idTousuariosInput>
  }

  export type valoracionesUpdateManyWithWhereWithoutUsuarios_valoraciones_empleado_idTousuariosInput = {
    where: valoracionesScalarWhereInput
    data: XOR<valoracionesUpdateManyMutationInput, valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput>
  }

  export type valoracionesUpsertWithWhereUniqueWithoutUsuarios_valoraciones_psicologo_idTousuariosInput = {
    where: valoracionesWhereUniqueInput
    update: XOR<valoracionesUpdateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput, valoracionesUncheckedUpdateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput>
    create: XOR<valoracionesCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput, valoracionesUncheckedCreateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput>
  }

  export type valoracionesUpdateWithWhereUniqueWithoutUsuarios_valoraciones_psicologo_idTousuariosInput = {
    where: valoracionesWhereUniqueInput
    data: XOR<valoracionesUpdateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput, valoracionesUncheckedUpdateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput>
  }

  export type valoracionesUpdateManyWithWhereWithoutUsuarios_valoraciones_psicologo_idTousuariosInput = {
    where: valoracionesScalarWhereInput
    data: XOR<valoracionesUpdateManyMutationInput, valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput>
  }

  export type citasCreateWithoutValoracionesInput = {
    id?: string
    fecha_hora: Date | string
    duracion_minutos?: number | null
    estado?: string | null
    notas?: string | null
    link_reunion?: string | null
    creado_en?: Date | string | null
    usuarios_citas_empleado_idTousuarios: usuariosCreateNestedOneWithoutCitas_citas_empleado_idTousuariosInput
    usuarios_citas_psicologo_idTousuarios: usuariosCreateNestedOneWithoutCitas_citas_psicologo_idTousuariosInput
  }

  export type citasUncheckedCreateWithoutValoracionesInput = {
    id?: string
    empleado_id: string
    psicologo_id: string
    fecha_hora: Date | string
    duracion_minutos?: number | null
    estado?: string | null
    notas?: string | null
    link_reunion?: string | null
    creado_en?: Date | string | null
  }

  export type citasCreateOrConnectWithoutValoracionesInput = {
    where: citasWhereUniqueInput
    create: XOR<citasCreateWithoutValoracionesInput, citasUncheckedCreateWithoutValoracionesInput>
  }

  export type usuariosCreateWithoutValoraciones_valoraciones_empleado_idTousuariosInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    checkins?: checkinsCreateNestedManyWithoutUsuariosInput
    citas_citas_empleado_idTousuarios?: citasCreateNestedManyWithoutUsuarios_citas_empleado_idTousuariosInput
    citas_citas_psicologo_idTousuarios?: citasCreateNestedManyWithoutUsuarios_citas_psicologo_idTousuariosInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesCreateNestedManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesCreateNestedManyWithoutUsuarios_mensajes_remitente_idTousuariosInput
    psicologos?: psicologosCreateNestedOneWithoutUsuariosInput
    recomendaciones_empleado?: recomendaciones_empleadoCreateNestedManyWithoutUsuariosInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesCreateNestedManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput
  }

  export type usuariosUncheckedCreateWithoutValoraciones_valoraciones_empleado_idTousuariosInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    checkins?: checkinsUncheckedCreateNestedManyWithoutUsuariosInput
    citas_citas_empleado_idTousuarios?: citasUncheckedCreateNestedManyWithoutUsuarios_citas_empleado_idTousuariosInput
    citas_citas_psicologo_idTousuarios?: citasUncheckedCreateNestedManyWithoutUsuarios_citas_psicologo_idTousuariosInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUncheckedCreateNestedManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUncheckedCreateNestedManyWithoutUsuarios_mensajes_remitente_idTousuariosInput
    psicologos?: psicologosUncheckedCreateNestedOneWithoutUsuariosInput
    recomendaciones_empleado?: recomendaciones_empleadoUncheckedCreateNestedManyWithoutUsuariosInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUncheckedCreateNestedManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput
  }

  export type usuariosCreateOrConnectWithoutValoraciones_valoraciones_empleado_idTousuariosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutValoraciones_valoraciones_empleado_idTousuariosInput, usuariosUncheckedCreateWithoutValoraciones_valoraciones_empleado_idTousuariosInput>
  }

  export type usuariosCreateWithoutValoraciones_valoraciones_psicologo_idTousuariosInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    checkins?: checkinsCreateNestedManyWithoutUsuariosInput
    citas_citas_empleado_idTousuarios?: citasCreateNestedManyWithoutUsuarios_citas_empleado_idTousuariosInput
    citas_citas_psicologo_idTousuarios?: citasCreateNestedManyWithoutUsuarios_citas_psicologo_idTousuariosInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesCreateNestedManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesCreateNestedManyWithoutUsuarios_mensajes_remitente_idTousuariosInput
    psicologos?: psicologosCreateNestedOneWithoutUsuariosInput
    recomendaciones_empleado?: recomendaciones_empleadoCreateNestedManyWithoutUsuariosInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesCreateNestedManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput
  }

  export type usuariosUncheckedCreateWithoutValoraciones_valoraciones_psicologo_idTousuariosInput = {
    id?: string
    nombre: string
    email: string
    password_hash: string
    rol: string
    empresa?: string | null
    cargo?: string | null
    avatar_url?: string | null
    activo?: boolean | null
    creado_en?: Date | string | null
    checkins?: checkinsUncheckedCreateNestedManyWithoutUsuariosInput
    citas_citas_empleado_idTousuarios?: citasUncheckedCreateNestedManyWithoutUsuarios_citas_empleado_idTousuariosInput
    citas_citas_psicologo_idTousuarios?: citasUncheckedCreateNestedManyWithoutUsuarios_citas_psicologo_idTousuariosInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUncheckedCreateNestedManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUncheckedCreateNestedManyWithoutUsuarios_mensajes_remitente_idTousuariosInput
    psicologos?: psicologosUncheckedCreateNestedOneWithoutUsuariosInput
    recomendaciones_empleado?: recomendaciones_empleadoUncheckedCreateNestedManyWithoutUsuariosInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUncheckedCreateNestedManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput
  }

  export type usuariosCreateOrConnectWithoutValoraciones_valoraciones_psicologo_idTousuariosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutValoraciones_valoraciones_psicologo_idTousuariosInput, usuariosUncheckedCreateWithoutValoraciones_valoraciones_psicologo_idTousuariosInput>
  }

  export type citasUpsertWithoutValoracionesInput = {
    update: XOR<citasUpdateWithoutValoracionesInput, citasUncheckedUpdateWithoutValoracionesInput>
    create: XOR<citasCreateWithoutValoracionesInput, citasUncheckedCreateWithoutValoracionesInput>
    where?: citasWhereInput
  }

  export type citasUpdateToOneWithWhereWithoutValoracionesInput = {
    where?: citasWhereInput
    data: XOR<citasUpdateWithoutValoracionesInput, citasUncheckedUpdateWithoutValoracionesInput>
  }

  export type citasUpdateWithoutValoracionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    duracion_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios_citas_empleado_idTousuarios?: usuariosUpdateOneRequiredWithoutCitas_citas_empleado_idTousuariosNestedInput
    usuarios_citas_psicologo_idTousuarios?: usuariosUpdateOneRequiredWithoutCitas_citas_psicologo_idTousuariosNestedInput
  }

  export type citasUncheckedUpdateWithoutValoracionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    empleado_id?: StringFieldUpdateOperationsInput | string
    psicologo_id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    duracion_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosUpsertWithoutValoraciones_valoraciones_empleado_idTousuariosInput = {
    update: XOR<usuariosUpdateWithoutValoraciones_valoraciones_empleado_idTousuariosInput, usuariosUncheckedUpdateWithoutValoraciones_valoraciones_empleado_idTousuariosInput>
    create: XOR<usuariosCreateWithoutValoraciones_valoraciones_empleado_idTousuariosInput, usuariosUncheckedCreateWithoutValoraciones_valoraciones_empleado_idTousuariosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutValoraciones_valoraciones_empleado_idTousuariosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutValoraciones_valoraciones_empleado_idTousuariosInput, usuariosUncheckedUpdateWithoutValoraciones_valoraciones_empleado_idTousuariosInput>
  }

  export type usuariosUpdateWithoutValoraciones_valoraciones_empleado_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkins?: checkinsUpdateManyWithoutUsuariosNestedInput
    citas_citas_empleado_idTousuarios?: citasUpdateManyWithoutUsuarios_citas_empleado_idTousuariosNestedInput
    citas_citas_psicologo_idTousuarios?: citasUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosNestedInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosNestedInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosNestedInput
    psicologos?: psicologosUpdateOneWithoutUsuariosNestedInput
    recomendaciones_empleado?: recomendaciones_empleadoUpdateManyWithoutUsuariosNestedInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutValoraciones_valoraciones_empleado_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkins?: checkinsUncheckedUpdateManyWithoutUsuariosNestedInput
    citas_citas_empleado_idTousuarios?: citasUncheckedUpdateManyWithoutUsuarios_citas_empleado_idTousuariosNestedInput
    citas_citas_psicologo_idTousuarios?: citasUncheckedUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosNestedInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosNestedInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosNestedInput
    psicologos?: psicologosUncheckedUpdateOneWithoutUsuariosNestedInput
    recomendaciones_empleado?: recomendaciones_empleadoUncheckedUpdateManyWithoutUsuariosNestedInput
    valoraciones_valoraciones_psicologo_idTousuarios?: valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type usuariosUpsertWithoutValoraciones_valoraciones_psicologo_idTousuariosInput = {
    update: XOR<usuariosUpdateWithoutValoraciones_valoraciones_psicologo_idTousuariosInput, usuariosUncheckedUpdateWithoutValoraciones_valoraciones_psicologo_idTousuariosInput>
    create: XOR<usuariosCreateWithoutValoraciones_valoraciones_psicologo_idTousuariosInput, usuariosUncheckedCreateWithoutValoraciones_valoraciones_psicologo_idTousuariosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutValoraciones_valoraciones_psicologo_idTousuariosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutValoraciones_valoraciones_psicologo_idTousuariosInput, usuariosUncheckedUpdateWithoutValoraciones_valoraciones_psicologo_idTousuariosInput>
  }

  export type usuariosUpdateWithoutValoraciones_valoraciones_psicologo_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkins?: checkinsUpdateManyWithoutUsuariosNestedInput
    citas_citas_empleado_idTousuarios?: citasUpdateManyWithoutUsuarios_citas_empleado_idTousuariosNestedInput
    citas_citas_psicologo_idTousuarios?: citasUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosNestedInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosNestedInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosNestedInput
    psicologos?: psicologosUpdateOneWithoutUsuariosNestedInput
    recomendaciones_empleado?: recomendaciones_empleadoUpdateManyWithoutUsuariosNestedInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutValoraciones_valoraciones_psicologo_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    empresa?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkins?: checkinsUncheckedUpdateManyWithoutUsuariosNestedInput
    citas_citas_empleado_idTousuarios?: citasUncheckedUpdateManyWithoutUsuarios_citas_empleado_idTousuariosNestedInput
    citas_citas_psicologo_idTousuarios?: citasUncheckedUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosNestedInput
    mensajes_mensajes_destinatario_idTousuarios?: mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosNestedInput
    mensajes_mensajes_remitente_idTousuarios?: mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosNestedInput
    psicologos?: psicologosUncheckedUpdateOneWithoutUsuariosNestedInput
    recomendaciones_empleado?: recomendaciones_empleadoUncheckedUpdateManyWithoutUsuariosNestedInput
    valoraciones_valoraciones_empleado_idTousuarios?: valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosNestedInput
  }

  export type valoracionesCreateManyCitasInput = {
    id?: string
    empleado_id: string
    psicologo_id: string
    puntuacion: number
    comentario?: string | null
    creado_en?: Date | string | null
  }

  export type valoracionesUpdateWithoutCitasInput = {
    id?: StringFieldUpdateOperationsInput | string
    puntuacion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios_valoraciones_empleado_idTousuarios?: usuariosUpdateOneRequiredWithoutValoraciones_valoraciones_empleado_idTousuariosNestedInput
    usuarios_valoraciones_psicologo_idTousuarios?: usuariosUpdateOneRequiredWithoutValoraciones_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type valoracionesUncheckedUpdateWithoutCitasInput = {
    id?: StringFieldUpdateOperationsInput | string
    empleado_id?: StringFieldUpdateOperationsInput | string
    psicologo_id?: StringFieldUpdateOperationsInput | string
    puntuacion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type valoracionesUncheckedUpdateManyWithoutCitasInput = {
    id?: StringFieldUpdateOperationsInput | string
    empleado_id?: StringFieldUpdateOperationsInput | string
    psicologo_id?: StringFieldUpdateOperationsInput | string
    puntuacion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recomendaciones_empleadoCreateManyRecomendacionesInput = {
    id?: string
    empleado_id: string
    completado?: boolean | null
    completado_en?: Date | string | null
    asignado_en?: Date | string | null
  }

  export type recomendaciones_empleadoUpdateWithoutRecomendacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asignado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios?: usuariosUpdateOneRequiredWithoutRecomendaciones_empleadoNestedInput
  }

  export type recomendaciones_empleadoUncheckedUpdateWithoutRecomendacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    empleado_id?: StringFieldUpdateOperationsInput | string
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asignado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recomendaciones_empleadoUncheckedUpdateManyWithoutRecomendacionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    empleado_id?: StringFieldUpdateOperationsInput | string
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asignado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type checkinsCreateManyUsuariosInput = {
    id?: string
    fecha?: Date | string
    estado_animo: number
    nivel_estres: number
    horas_sueno?: Decimal | DecimalJsLike | number | string | null
    notas?: string | null
    creado_en?: Date | string | null
  }

  export type citasCreateManyUsuarios_citas_empleado_idTousuariosInput = {
    id?: string
    psicologo_id: string
    fecha_hora: Date | string
    duracion_minutos?: number | null
    estado?: string | null
    notas?: string | null
    link_reunion?: string | null
    creado_en?: Date | string | null
  }

  export type citasCreateManyUsuarios_citas_psicologo_idTousuariosInput = {
    id?: string
    empleado_id: string
    fecha_hora: Date | string
    duracion_minutos?: number | null
    estado?: string | null
    notas?: string | null
    link_reunion?: string | null
    creado_en?: Date | string | null
  }

  export type mensajesCreateManyUsuarios_mensajes_destinatario_idTousuariosInput = {
    id?: string
    remitente_id: string
    contenido: string
    leido?: boolean | null
    creado_en?: Date | string | null
  }

  export type mensajesCreateManyUsuarios_mensajes_remitente_idTousuariosInput = {
    id?: string
    destinatario_id: string
    contenido: string
    leido?: boolean | null
    creado_en?: Date | string | null
  }

  export type recomendaciones_empleadoCreateManyUsuariosInput = {
    id?: string
    recomendacion_id: string
    completado?: boolean | null
    completado_en?: Date | string | null
    asignado_en?: Date | string | null
  }

  export type valoracionesCreateManyUsuarios_valoraciones_empleado_idTousuariosInput = {
    id?: string
    psicologo_id: string
    cita_id: string
    puntuacion: number
    comentario?: string | null
    creado_en?: Date | string | null
  }

  export type valoracionesCreateManyUsuarios_valoraciones_psicologo_idTousuariosInput = {
    id?: string
    empleado_id: string
    cita_id: string
    puntuacion: number
    comentario?: string | null
    creado_en?: Date | string | null
  }

  export type checkinsUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_animo?: IntFieldUpdateOperationsInput | number
    nivel_estres?: IntFieldUpdateOperationsInput | number
    horas_sueno?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type checkinsUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_animo?: IntFieldUpdateOperationsInput | number
    nivel_estres?: IntFieldUpdateOperationsInput | number
    horas_sueno?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type checkinsUncheckedUpdateManyWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_animo?: IntFieldUpdateOperationsInput | number
    nivel_estres?: IntFieldUpdateOperationsInput | number
    horas_sueno?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type citasUpdateWithoutUsuarios_citas_empleado_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    duracion_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios_citas_psicologo_idTousuarios?: usuariosUpdateOneRequiredWithoutCitas_citas_psicologo_idTousuariosNestedInput
    valoraciones?: valoracionesUpdateManyWithoutCitasNestedInput
  }

  export type citasUncheckedUpdateWithoutUsuarios_citas_empleado_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    psicologo_id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    duracion_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valoraciones?: valoracionesUncheckedUpdateManyWithoutCitasNestedInput
  }

  export type citasUncheckedUpdateManyWithoutUsuarios_citas_empleado_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    psicologo_id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    duracion_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type citasUpdateWithoutUsuarios_citas_psicologo_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    duracion_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios_citas_empleado_idTousuarios?: usuariosUpdateOneRequiredWithoutCitas_citas_empleado_idTousuariosNestedInput
    valoraciones?: valoracionesUpdateManyWithoutCitasNestedInput
  }

  export type citasUncheckedUpdateWithoutUsuarios_citas_psicologo_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    empleado_id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    duracion_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valoraciones?: valoracionesUncheckedUpdateManyWithoutCitasNestedInput
  }

  export type citasUncheckedUpdateManyWithoutUsuarios_citas_psicologo_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    empleado_id?: StringFieldUpdateOperationsInput | string
    fecha_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    duracion_minutos?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    link_reunion?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mensajesUpdateWithoutUsuarios_mensajes_destinatario_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios_mensajes_remitente_idTousuarios?: usuariosUpdateOneRequiredWithoutMensajes_mensajes_remitente_idTousuariosNestedInput
  }

  export type mensajesUncheckedUpdateWithoutUsuarios_mensajes_destinatario_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    remitente_id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_destinatario_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    remitente_id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mensajesUpdateWithoutUsuarios_mensajes_remitente_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuarios_mensajes_destinatario_idTousuarios?: usuariosUpdateOneRequiredWithoutMensajes_mensajes_destinatario_idTousuariosNestedInput
  }

  export type mensajesUncheckedUpdateWithoutUsuarios_mensajes_remitente_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinatario_id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mensajesUncheckedUpdateManyWithoutUsuarios_mensajes_remitente_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinatario_id?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    leido?: NullableBoolFieldUpdateOperationsInput | boolean | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recomendaciones_empleadoUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asignado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recomendaciones?: recomendacionesUpdateOneRequiredWithoutRecomendaciones_empleadoNestedInput
  }

  export type recomendaciones_empleadoUncheckedUpdateWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    recomendacion_id?: StringFieldUpdateOperationsInput | string
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asignado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recomendaciones_empleadoUncheckedUpdateManyWithoutUsuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    recomendacion_id?: StringFieldUpdateOperationsInput | string
    completado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    completado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    asignado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type valoracionesUpdateWithoutUsuarios_valoraciones_empleado_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    puntuacion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    citas?: citasUpdateOneRequiredWithoutValoracionesNestedInput
    usuarios_valoraciones_psicologo_idTousuarios?: usuariosUpdateOneRequiredWithoutValoraciones_valoraciones_psicologo_idTousuariosNestedInput
  }

  export type valoracionesUncheckedUpdateWithoutUsuarios_valoraciones_empleado_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    psicologo_id?: StringFieldUpdateOperationsInput | string
    cita_id?: StringFieldUpdateOperationsInput | string
    puntuacion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_empleado_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    psicologo_id?: StringFieldUpdateOperationsInput | string
    cita_id?: StringFieldUpdateOperationsInput | string
    puntuacion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type valoracionesUpdateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    puntuacion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    citas?: citasUpdateOneRequiredWithoutValoracionesNestedInput
    usuarios_valoraciones_empleado_idTousuarios?: usuariosUpdateOneRequiredWithoutValoraciones_valoraciones_empleado_idTousuariosNestedInput
  }

  export type valoracionesUncheckedUpdateWithoutUsuarios_valoraciones_psicologo_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    empleado_id?: StringFieldUpdateOperationsInput | string
    cita_id?: StringFieldUpdateOperationsInput | string
    puntuacion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type valoracionesUncheckedUpdateManyWithoutUsuarios_valoraciones_psicologo_idTousuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    empleado_id?: StringFieldUpdateOperationsInput | string
    cita_id?: StringFieldUpdateOperationsInput | string
    puntuacion?: IntFieldUpdateOperationsInput | number
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}