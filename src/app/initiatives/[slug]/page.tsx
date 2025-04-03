
import Image from 'next/image';
import Link from 'next/link';
import { initiativesData } from '@/constants';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Props = {
  params: { 
    slug: string 
  }
};

export default async function InitiativePage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const initiative = initiativesData.find(
    (item) => item.href === `/initiatives/${slug}`
  );

  if (!initiative) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Initiative not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <Navbar />
      <div className="relative h-96 w-full mt-24">
        <Image
          src={initiative.image}
          alt={initiative.title}
          fill
          className="object-cover"
          priority
        />
        
        
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              {/* Split text into paragraphs for better readability */}
              {initiative.pageText.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Join Button */}
            <div className="mt-12 text-center">
              <Link href={initiative.redirectHref}>
                <button className="bg-[#ed9702] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Join This Initiative
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// For Next.js App Router - generate paths from your data
export async function generateStaticParams() {
  return initiativesData.map((initiative) => ({
    slug: initiative.href.split('/').pop(),
  }));
}
