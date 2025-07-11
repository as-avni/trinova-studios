import { Check, X, Minus } from "lucide-react"

export function Comparison() {
  const features = [
    {
      name: "Softens Hard Water",
      aquastori: { value: "Effectively removes hardness", icon: "check" },
      others: { value: "", icon: "check" },
    },
    {
      name: "Helps Improve Skin & Hair Quality",
      aquastori: { value: "Softer skin, smoother hair.", icon: "check" },
      others: { value: "", icon: "check" },
    },
    {
      name: "Removes Sediments (Sand/Dust)",
      aquastori: { value: "Free Sand Filter Included!", icon: "check" },
      others: { value: "", icon: "x" },
    },
    {
      name: "Advanced Filtration Technology",
      aquastori: { value: "Premium Grade", icon: "check" },
      others: { value: "", icon: "minus" },
    },
    {
      name: "Expert Installation",
      aquastori: { value: "Free with Every Purchase", icon: "check" },
      others: { value: "", icon: "x" },
    },
    {
      name: "Support & Maintenance",
      aquastori: { value: "Dedicated Team Support", icon: "check" },
      others: { value: "Limited or Paid", icon: "text" },
    },
    {
      name: "Warranty",
      aquastori: { value: "Up to 24 Months", icon: "check" },
      others: { value: "6-12 Months", icon: "text" },
    },
  ]

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "check":
        return <Check className="h-5 w-5 text-[#FF7A45]" />
      case "x":
        return <X className="h-5 w-5 text-gray-400" />
      case "minus":
        return <Minus className="h-5 w-5 text-gray-400" />
      default:
        return null
    }
  }

  return (
    <section className="w-full bg-[#f8fbfd] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center fade-in">
          <h2 className="mb-2 text-xl font-medium text-[#0078AA]">Compare the Difference</h2>
          <h1 className="mb-4 text-2xl font-semibold md:text-3xl lg:text-4xl">
            Aquastori vs. The Rest – What Sets <br/>Us Apart
          </h1>
          <p className="mx-auto max-w-3xl text-gray-700 md:text-lg">
            We don't just soften water. We upgrade your entire water experience.
          </p>
        </div>

        <div className="mx-auto max-w-4xl overflow-x-auto fade-in">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-1/3 p-4 text-left"></th>
                <th className="w-1/3 p-4 text-center">
                  <div className="flex justify-center">
                    <img src="/assets/aquastori-logo.png" alt="Aquastori Logo" className="w-auto" />
                  </div>
                </th>
                <th className="w-1/3 p-4 text-center">
                  <div className="text-xl font-bold">Others</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-t border-gray-200 transition-colors hover:bg-gray-50">
                  <td className="p-4 text-left font-medium">{feature.name}</td>
                  <td className="p-4 text-center bg-white">
                    <div className="flex items-center justify-start">
                      {renderIcon(feature.aquastori.icon)}
                      <span className="ml-2 transition-all hover:text-[#0078AA]">{feature.aquastori.value}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    {feature.others.icon === "text" ? (
                      <span className="transition-all hover:text-[#0078AA]">{feature.others.value}</span>
                    ) : (
                      <div className="flex items-center justify-center">
                        {renderIcon(feature.others.icon)}
                        <span className="ml-2 transition-all hover:text-[#0078AA]">{feature.others.value}</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
