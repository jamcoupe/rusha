

export declare class Rusha {
  constructor(bitSize?:number);

  /**
   * The digest and digestFrom* interface returns the hash digest
   * as a hex string.
   */
  digest(value: string|ArrayBuffer|Array<any>|Blob|any):string;
  rawDigest():Int32Array;
  digestFromArrayBuffer(value:ArrayBuffer):string;
  digestFromBuffer(value:any):string;
  digestFromString(value:string):string;
}