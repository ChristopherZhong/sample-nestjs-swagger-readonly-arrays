import { IsString, IsUUID, Length } from 'class-validator';

export class Example {
  /**
   * The ID of an Example.
   *
   * @example '4ff02953-14a2-45ae-87e8-2858776bb818'
   */
  @IsUUID()
  readonly id!: string;

  /**
   * The name of an Example.
   * 
   * @example 'Example'
   */
  @IsString()
  @Length(1, 255)
  readonly name!: string;
}
