'use client'

import { useState, useMemo } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ScrollReveal'
import { motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryImage {
  id: number
  title: string
  category: string
  placeholder: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: 'Blush Wedding Invitation',
    category: 'custom',
    placeholder: 'linear-gradient(135deg, #FFB6C1 0%, #FFE4E1 100%)',
  },
  {
    id: 2,
    title: 'Gold Foil Invitation',
    category: 'custom',
    placeholder: 'linear-gradient(135deg, #FFD700 0%, #FFF8DC 100%)',
  },
  {
    id: 3,
    title: 'Modern Black & White',
    category: 'semi-custom',
    placeholder: 'linear-gradient(135deg, #000000 0%, #CCCCCC 100%)',
  },
  {
    id: 4,
    title: 'Sage Green Suite',
    category: 'custom',
    placeholder: 'linear-gradient(135deg, #9CAF88 0%, #D7EEED 100%)',
  },
  {
    id: 5,
    title: 'Watercolor Botanical',
    category: 'custom',
    placeholder: 'linear-gradient(135deg, #8B4513 0%, #DEB887 100%)',
  },
  {
    id: 6,
    title: 'Classic Elegance',
    category: 'semi-custom',
    placeholder: 'linear-gradient(135deg, #2C2C2C 0%, #E8DDD4 100%)',
  },
  {
    id: 7,
    title: 'Blush & Copper',
    category: 'custom',
    placeholder: 'linear-gradient(135deg, #B87333 0%, #FFB6C1 100%)',
  },
  {
    id: 8,
    title: 'Minimalist Modern',
    category: 'semi-custom',
    placeholder: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
  },
  {
    id: 9,
    title: 'Romantic Floral',
    category: 'custom',
    placeholder: 'linear-gradient(135deg, #DB7093 0%, #FFE4E1 100%)',
  },
  {
    id: 10,
    title: 'Navy & Gold',
    category: 'custom',
    placeholder: 'linear-gradient(135deg, #000080 0%, #FFD700 100%)',
  },
  {
    id: 11,
    title: 'Emerald Dream',
    category: 'custom',
    placeholder: 'linear-gradient(135deg, #50C878 0%, #E0F5E9 100%)',
  },
  {
    id: 12,
    title: 'Soft Pastels',
    category: 'semi-custom',
    placeholder: 'linear-gradient(135deg, #FFB6C1 0%, #DDA0DD 100%)',
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredImages = useMemo(() => {
    return selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)
  }, [selectedCategory])

  const currentImageIndex = selectedImage
    ? filteredImages.findIndex((img) => img.id === selectedImage.id)
    : -1

  const goToNext = () => {
    if (currentImageIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentImageIndex + 1])
    }
  }

  const goToPrev = () => {
    if (currentImageIndex > 0) {
      setSelectedImage(filteredImages[currentImageIndex - 1])
    }
  }

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-charcoal mb-4 text-center">
              GALLERY
            </h1>
            <div className="w-16 h-1 bg-darkGold mx-auto mb-12"></div>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal delay={0.2} stagger={0}>
            <div className="flex justify-center gap-4 mb-16 flex-wrap">
              {[
                { label: 'All Work', value: 'all' },
                { label: 'Custom', value: 'custom' },
                { label: 'Semi-Custom', value: 'semi-custom' },
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedCategory(filter.value)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    selectedCategory === filter.value
                      ? 'bg-darkGold text-cream'
                      : 'border border-darkGold text-darkGold hover:bg-darkGold hover:text-cream'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedImage(image)}
                className="cursor-pointer group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow aspect-square">
                  <div
                    style={{ background: image.placeholder }}
                    className="w-full h-full absolute inset-0"
                  ></div>
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors flex items-center justify-center">
                    <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-center px-4">
                      View Fullsize
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-charcoal font-semibold">{image.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-charcoal/90 z-50 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-cream hover:text-darkGold transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl flex flex-col items-center"
          >
            {/* Image */}
            <div
              style={{ background: selectedImage.placeholder }}
              className="w-full aspect-square rounded-lg shadow-2xl mb-6"
            ></div>

            {/* Image Info */}
            <div className="text-center mb-6">
              <h2 className="font-serif text-3xl font-bold text-cream mb-2">
                {selectedImage.title}
              </h2>
              <p className="text-cream/70 capitalize">
                {selectedImage.category.replace('-', ' ')} Design
              </p>
            </div>

            {/* Navigation */}
            <div className="flex gap-6 items-center">
              <button
                onClick={goToPrev}
                disabled={currentImageIndex === 0}
                className="text-cream hover:text-darkGold transition-colors disabled:opacity-30"
                aria-label="Previous"
              >
                <ChevronLeft size={32} />
              </button>
              <span className="text-cream text-sm">
                {currentImageIndex + 1} / {filteredImages.length}
              </span>
              <button
                onClick={goToNext}
                disabled={currentImageIndex === filteredImages.length - 1}
                className="text-cream hover:text-darkGold transition-colors disabled:opacity-30"
                aria-label="Next"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <Footer />
    </main>
  )
}
