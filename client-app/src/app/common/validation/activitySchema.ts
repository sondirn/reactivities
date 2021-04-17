import * as Yup from 'yup'

export const activitySchema = Yup.object({
    title: Yup.string().required(),
    description: Yup.string().required(),
    category: Yup.string().required(),
    city: Yup.string().required(),
    date: Yup.string().required(),
    venue: Yup.string().required(),
})

