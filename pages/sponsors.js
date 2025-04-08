<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
  {/* Gold Column */}
  <div>
    <h3 className="text-xl font-bold text-yellow-600">🥇 Gold Sponsors</h3>
    <p className="text-sm italic mb-4">$500+ value</p>
    <Link href="https://tobinselite.com/" target="_blank" rel="noopener noreferrer">
      <Image
        src="/images/gallery/Tobins.png"
        alt="Tobins Elite"
        width={200}
        height={100}
        className="mx-auto mb-2 rounded shadow"
      />
    </Link>
    <p className="text-sm">Tobins Elite</p>
  </div>

  {/* Silver Column */}
  <div>
    <h3 className="text-xl font-bold text-gray-500">🥈 Silver Sponsors</h3>
    <p className="text-sm italic mb-4">$100 – $499 value</p>
    <div className="mb-6">
      <Image
        src="/images/gallery/Jens_Clean.png"
        alt="Jen's Cleaning Angels"
        width={200}
        height={100}
        className="mx-auto mb-2 rounded shadow"
      />
      <p className="text-sm">Jen's Cleaning Angels</p>
    </div>
    <div className="mb-6">
      <Link href="https://www.hug-hes.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/gallery/Hug-hes.png"
          alt="Hug-Hes Cafe"
          width={200}
          height={100}
          className="mx-auto mb-2 rounded shadow"
        />
      </Link>
      <p className="text-sm">Hug-Hes Cafe</p>
    </div>
  </div>

  {/* Bronze Column */}
  <div>
    <h3 className="text-xl font-bold text-orange-600">🥉 Bronze Sponsors</h3>
    <p className="text-sm italic mb-4">Under $100 value</p>

    <div className="mb-6">
      <Link href="https://www.knafs.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/gallery/Knafs.png"
          alt="Knafs"
          width={200}
          height={100}
          className="mx-auto mb-2 rounded shadow"
        />
      </Link>
      <p className="text-sm">Knafs</p>
    </div>

    <div className="mb-6">
      <Link href="https://birdsandbeesutah.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/gallery/Birds_Bee.jpg"
          alt="For the Birds and Bees"
          width={200}
          height={100}
          className="mx-auto mb-2 rounded shadow"
        />
      </Link>
      <p className="text-sm">For the Birds and Bees</p>
    </div>

    <div className="mb-6">
      <Link href="https://original-belless-salon.square.site/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/gallery/Belle.png"
          alt="The Original Belle's Salon"
          width={200}
          height={100}
          className="mx-auto mb-2 rounded shadow"
        />
      </Link>
      <p className="text-sm">The Original Belle's Salon</p>
    </div>
  </div>
</div>
