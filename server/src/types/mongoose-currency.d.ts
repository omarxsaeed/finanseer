// src/types/mongoose-currency.d.ts
declare module "mongoose-currency" {
  import mongoose from "mongoose";

  // Define the Currency custom type extending mongoose.SchemaType
  class Currency extends mongoose.SchemaType {
    constructor(key: string, options?: mongoose.SchemaTypeOptions<number>);

    cast(val: string | number): number;
  }

  // Function to load the Currency type into mongoose
  export function loadType(mongoose: typeof mongoose): typeof Currency;

  // Extend the mongoose namespace to include the Currency type
  declare global {
    namespace mongoose {
      namespace SchemaTypes {
        // Add Currency to SchemaTypes
        let Currency: typeof Currency;
      }

      namespace Types {
        // Add Currency to Types
        let Currency: typeof SchemaTypes.Currency;
      }
    }
  }
}
