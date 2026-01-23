
import { useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Camera, Plus, X } from "lucide-react"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const EditProfile = () => {
  const [form, setForm] = useState({
    name: "Julianne Sterling",
    username: "julianne",
    email: "julianne@email.com",
    bio:
      "Home chef & culinary enthusiast specializing in French-Mediterranean fusion.",
  })

  const [image, setImage] = useState<string | null>(
    "https://lh3.googleusercontent.com/aida-public/AB6AXuApdv80nyFEcnx-Y9wm3u4fmBhPSS-q15hVhTmHt0AeJuKLNxBX15nku-vme5ur26bGebTmDgIsuxkoOYEJ4Uts_q7ZRM5zdlvcQry0fquV2Q9z7PyKMJ-ueW2REU2Uo0Q510hHhVkkWwYzBzPGKnislIcp6dS2HMPJa7wCvR2Wgawh6-FLrx1PmCqe_Ucz6Rb37whcsk3cBJJ5q0PP3rnMvBcw210-6FeXxjKE4dSXE0-VXar9G1YM-e2-3HHVVEv8HqvBndDRUr0V"
  )

  const [tags, setTags] = useState<string[]>([
    "French",
    "Mediterranean",
    "Sourdough",
  ])
  const [tagInput, setTagInput] = useState("")

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setImage(url)
  }

  const addTag = () => {
    if (!tagInput.trim()) return
    if (tags.includes(tagInput.trim())) return
    setTags([...tags, tagInput.trim()])
    setTagInput("")
  }

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const payload = {
      ...form,
      tags,
      image,
    }

    console.log("SAVE PROFILE →", payload)
    // send to API later
  }

  return (
    <div className="min-h-screen bg-[#f4f2f1] dark:bg-[#191b1f] text-slate-900 dark:text-slate-100">
      <main className="mx-auto max-w-5xl px-6 py-12">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold">Edit Profile</h1>
          <p className="mt-1 text-sm text-[#608573]">
            Update your public information and preferences
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Profile Image */}
          <section className="flex flex-col items-center gap-4">
            <div className="relative group">
              <div
                className="h-28 w-28 rounded-full bg-cover bg-center ring-4 ring-[#eecd2b]/20"
                style={{ backgroundImage: `url(${image})` }}
              />
              <label className="absolute bottom-0 right-0 cursor-pointer rounded-full bg-[#eecd2b] p-2 text-white shadow-lg">
                <Camera size={16} />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            {image && (
              <button
                type="button"
                onClick={() => setImage(null)}
                className="text-xs text-red-500 hover:underline"
              >
                Remove photo
              </button>
            )}
          </section>

          {/* Basic Info */}
          <section className="space-y-6">
            <h3 className="border-b pb-2 text-lg font-semibold">
              Basic Information
            </h3>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* <div>
                <label htmlFor="name" className="label">Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="input rounded-lg bg-transparent border-[#d6e1db] dark:border-[#eecd2b]/20 focus:ring-1 focus:ring-[#eecd2b] focus:border-[#eecd2b] text-sm p-3"
                />
          </div> */}
              <Field>
                <FieldLabel htmlFor="form-name">Name</FieldLabel>
                <Input
                  id="form-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Marry"
                  required
                />
                <FieldDescription>
                  We just want to know you better.
                </FieldDescription>
              </Field>

              {/* <div>
                <label className="label">Username</label>
                <input
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  className="input"
                />
              </div> */}
              <Field>
                <FieldLabel htmlFor="form-username">Username</FieldLabel>
                <Input
                  id="form-username"
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="Evil Rabbit"
                  required
                />
                <FieldDescription>
                  It&apos;ll be shown with your image in header.
                </FieldDescription>
              </Field>

              {/* <div className="sm:col-span-2">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="input"
                />
              </div> */}
              <Field>
                <FieldLabel htmlFor="form-email">Email</FieldLabel>
                <Input
                  id="form-email"
                  type="email"
                  value={form.email}
                  name="email"
                  onChange={handleChange}
                  placeholder="Evil Rabbit"
                  required
                />
                <FieldDescription>
                  We&apos;ll never share your email with anyone.
                </FieldDescription>
              </Field>
            </div>
          </section>

          {/* Bio & Tags */}
          <section className="space-y-6">
            <h3 className="border-b pb-2 text-lg font-semibold">
              Profile Details
            </h3>

            {/* <div>
              <label className="label">Short Description</label>
              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                rows={3}
                className="input resize-none"
              />
            </div> */}
            <Field>
              <FieldLabel htmlFor="textarea-bio">Short Description</FieldLabel>
              <FieldDescription>Enter your message below.</FieldDescription>
              <Textarea
                id="textarea-bio"
                name="bio"
                value={form.bio}
                rows={3}
                onChange={handleChange}
                placeholder="Type your message here."
              />
            </Field>

            <div>
              <label className="label">Tags (optional)</label>
              <div className="flex flex-wrap mt-2 gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 rounded-full bg-[#eecd2b]/10 px-3 py-1 text-sm"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className=" cursor-pointer hover:bg-[#722c2c] transition-all rounded-full"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>

              <div className="mt-3 flex gap-2">
                <Field>
                  {/* <FieldLabel htmlFor="form-tag">Tags</FieldLabel> */}

                  <div className="w-full flex items-center gap-4">
                    <Input
                      id="form-tag"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && addTag()}
                      placeholder="Add tag"
                      className=" w-4/5"
                    />
                    <Button
                      onClick={addTag}
                      className=" w-1/5 cursor-pointer  active:scale-95"
                    >
                      <Plus />
                      Add
                    </Button>
                  </div>
                  <FieldDescription>
                    It&apos;s Optional. Just your favorite stuffs.
                  </FieldDescription>
                </Field>

                {/* <button
                  type="button"
                  className="rounded-lg bg-[#eecd2b] px-4 text-white"
                >
                  Add
                </button> */}
              </div>
            </div>
          </section>

          {/* Appearance */}
          <section className="space-y-4">
            <h3 className="border-b pb-2 text-lg font-semibold">
              Appearance
            </h3>
            <ThemeToggle />
          </section>

          {/* Actions */}
          <div className="flex justify-end gap-4 border-t pt-6">
            <button
              type="button"
              className="text-sm text-[#608573] hover:underline"
            >
              Discard
            </button>
            <button
              type="submit"
              className="rounded-lg bg-[#eecd2b] px-8 py-3 text-sm font-bold text-white shadow-lg"
            >
              Save Changes
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default EditProfile
