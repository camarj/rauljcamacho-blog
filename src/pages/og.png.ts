import type { APIRoute } from "astro";
import { generateOpenGraphImage } from "astro-og-canvas";

export const GET: APIRoute = async () => {
  const body = await generateOpenGraphImage({
    title: "rauljcamacho.online",
    description:
      "Cuaderno de campo sobre IA, tecnología y cómo construimos software.",
    bgGradient: [[245, 241, 234]],
    border: { color: [29, 35, 66], width: 8, side: "block-end" },
    padding: 80,
    font: {
      title: {
        color: [29, 35, 66],
        families: ["Fraunces"],
        weight: "SemiBold",
        size: 92,
        lineHeight: 1.05,
      },
      description: {
        color: [62, 73, 110],
        families: ["Inter"],
        weight: "Normal",
        size: 38,
        lineHeight: 1.3,
      },
    },
    fonts: [
      "./src/assets/fonts/Fraunces.ttf",
      "./src/assets/fonts/Inter.ttf",
    ],
  });

  return new Response(body, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
