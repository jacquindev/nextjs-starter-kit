import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ErrorMessage } from "@hookform/error-message"
import { cva } from "class-variance-authority"
import { FieldErrors, type FieldValues, UseFormRegister } from "react-hook-form"

type Props = {
  type?: "text" | "email" | "password" | "number"
  inputType: "select" | "input" | "textarea"
  options?: {
    id: string
    name: string
  }[]
  label?: string
  placeholder: string
  register: UseFormRegister<any>
  name: string
  errors: FieldErrors<FieldValues>
  lines?: number
  defaultValue?: string
}

// Styling
const labelContainer = cva("")
const inputContainer = cva("bg-transparent border border-input")
const errorMessage = cva("text-red-400 mt-2")
const selectTrigger = cva("w-full")
const selectContent = cva("bg-background/40 backdrop-blur-xl")

const FormGenerator = ({
  type,
  inputType,
  options,
  label,
  placeholder,
  register,
  name,
  errors,
  lines,
  defaultValue,
}: Props) => {
  switch (inputType) {
    case "input":
      return (
        <>
          {label && (
            <Label className={labelContainer()} htmlFor={`input-${label}`}>
              {label}
            </Label>
          )}
          <Input
            id={`input-${label}`}
            type={type}
            placeholder={placeholder}
            className={inputContainer()}
            {...register(name)}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className={errorMessage()}>
                {message === "Required." ? "" : message}
              </p>
            )}
          />
        </>
      )

    case "textarea":
      return (
        <>
          {label && (
            <Label className={labelContainer()} htmlFor={`input-${label}`}>
              {label}
            </Label>
          )}
          <Textarea
            id={`input-${label}`}
            placeholder={placeholder}
            className={inputContainer()}
            rows={lines}
            {...register(name)}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className={errorMessage()}>
                {message === "Required." ? "" : message}
              </p>
            )}
          />
        </>
      )

    case "select":
      return (
        <>
          {label && (
            <Label className={labelContainer()} htmlFor={`input-${label}`}>
              {label}
            </Label>
          )}
          <Select defaultValue={defaultValue} {...register(name)}>
            <SelectTrigger className={selectTrigger()}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className={selectContent()}>
              {options?.length &&
                options.map((option) => (
                  <SelectItem key={option.id} value={option.id}>
                    {option.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className={errorMessage()}>
                {message === "Required." ? "" : message}
              </p>
            )}
          />
        </>
      )

    default:
      break
  }
}

export default FormGenerator
