CERTIFICATE IMAGES
==================

Drop a scan/screenshot of each certificate in this folder, then reference it
from  src/data.js  in the `certifications` array via the `image` field, e.g.:

    {
      name: 'Deep Learning Specialization',
      issuer: 'DeepLearning.AI · Coursera',
      year: '2024',
      image: './certs/deep-learning-specialization.jpg',   // <-- this file
      link: 'https://coursera.org/verify/XXXX',             // optional "Verify" button
    },

Tips:
- Any image format works (.jpg, .png, .webp). JPG/WEBP keep file size small.
- Landscape scans look best in the lightbox.
- Filenames are up to you — just match the `image:` path in data.js.
- You can add as many certifications as you want; the grid grows automatically.
- If a certificate has no image yet, leave `image` out (or wrong) and the
  lightbox shows the details with a friendly placeholder instead of breaking.

The filenames currently referenced in data.js (replace with your real ones):
  deep-learning-specialization.jpg
  machine-learning-stanford.jpg
  mitacs-globalink.jpg
  tensorflow-developer.jpg
  aws-cloud-practitioner.jpg
  docker-kubernetes.jpg
