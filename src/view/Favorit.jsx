import React from 'react'

function Media() {
  return (
  
 <div className='flex'>
<section class="bg-gray-900">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div class="mx-auto max-w-xl text-center">
      <h2 class="text-4xl font-bold tracking-tight sm:text-5xl text-white" >
     Rating Web sederhana ini
      </h2>

      <p class="text-gring-offset-warm-gray-500 mx-auto mt-4 max-w-lg  text-white">
       Rating global
      </p>
    </div>

    <div
      class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3"
    >
      <div>
        <img
          alt="Woman"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRISGBgSGBgSFRIRGBERERgSGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISGDEhISExMTQxNDQxNDQ0MTQ0NDE0MTQ0NDQ0MTQ0NDQxNDQ0PzQxMTQ0ND80MTQxPzE/MTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xABAEAACAQIEBAMGAwUHAwUAAAABAgADEQQSITEFQVFhBiJxBxOBkaGxMlLBI0JictEUM0NTkrLhJMLwNHSCs/H/xAAbAQACAwEBAQAAAAAAAAAAAAAAAQIDBAUGB//EACQRAAICAgICAgMBAQAAAAAAAAABAhEDIQQSMUEFMhMiYYFC/9oADAMBAAIRAxEAPwDkHHmlilIKw1lmkJxr0e8XksiA0SmM5kaJMBhIbaydpC+4luN1JGPmR7YmiN0g5ZNUEZU7mdbykeNcabRGFhBIeTvGtGIdRDvIhIMXiNLDeMTZDi8Ve4U6CUC994dXTtFToO5siOx6IC32kGyJBUI5Ss2s6Kl4WxL2Le7pg/5rhW+AFzBxXhZ1W4q02YbrZ0/3CRAxMPVZGDDl9ROlw9QOoYc9/Wc3iKDocrqQRyP6TQ4LWIJTk2o7GTQKzZEEwrRpKh0RuJFllgiCywArMgjCnJGiQayJIJafWEyiPeMwMdAQOIwQWk2SJkioWyv7vvHk3uz0MUVD2HVGsmTaQ1dT8ZLSnG9Hv/ZMsZogYiYWAxEhqCTyOoIJ0yvJG4tETG8YPHH4fSAFnYxu4niuRHrkkh85vHjgRSwpEdFJ6aCQ4PhlSsfKLC9i7aLf9TNHD4BnFyDkpnz9WY7KJ0bY1aWjoiIBZFuAAttTffNe/KRZEz8H4ZpIQKgLkm2Zv7vbko1M1kzU3CIqZdQVVQFAG21vrMDEeJ6ajye8e110AQAHfU6k99Jl1PFdQXCIi33OrE97mRtDo7BKwzftCA520Fk6abbTPxNQG4uCxcWY6iwH5iPpONrcdxDf4h+AtKx4pXO9Rj8iPlaLsh0zrcfg6b2V9Q97MNMrdeonMYnAvRbOpzopuHHToZZwXHmQjOivyuOnpNvCYqlUUqrKFO4Nr+hBjUiLRTDggEbEAj46xSWphPd6KSU3Rj3Oo+ciEsTEKRsZLI2EGNA27CJhaJowiJAZpIpjFIIU9YASAmNEIcAA1ij5l6NFCwBbeSUIDbn1klMziHv2TRRhHMQCgPDgsYCZAOfeCN5I28C06vHlcTyXyWPpmYodFcxtBtI8RVsMq7t0+00S0jm2aGL44Ka5KI1A8zHUBuoHWZVLCV8Q2ZsxvqXebnCeAqLO4zHcKfwj+s36OHt/+TLKb9GnHh9s5zB+F0P42Zuw0E1aPh2iNqY/+Ws26SWkoAlbkzT+KK9GGeB0/wDLX5StU4BSP7i/DSdHkvBdJFNh0S9HGYzwwn7t15zn8Tw2pROYagH8S7/ET0qtttMbFpe+3oReTUmiueFNGDwvjGfLSqkC/lVtlvyv0kzplJB5G0pcT4SNWQWO9uR9I2BxWdcrHzppruV5GaIStGGcXFlvNGcwWJEZtpaIRaOJHlkyLpFRJAkR0WHFHQqGsIzRyI9oUMfSKK8UVAQtz9YdKCyan1hpvOIfQH5JRHiiiEDBZpJI3ghETmOwiYQxsD2m7iy9Hn/mIeJIC8DhqZ8SvRRmt3G0lEHw0v8A1DD+G31mvI9HBj9kdvQWHm1sN5A+c+VPLfdtz8IycHP4veOD1JmSjoJ0jVpYc21lhcP3E5+pg8QmoqZl7E/aT4Ws40J769YJDUrNZ8Kd4xwxI5y3gKhZbneKtUsIFnoyamGNjMbFYc8pNxXijLcKf1mG1bEvqFYjsI6KpSomrJ16Tm2TJiLDZtfhNm1VTmYGxsCu/OZmPW+IQj8l/rLMf2M2aqJmifaOYJmoz0NaSLtAAhiMQogYoNpGx3RJFA1jiOxWwoorRQsLBaOkNxGUzhn0J7DvGiWKAhs0ZjHywSsEIAx6e0QSSIs1cf7HE+V3EemhYhRzl3h/CKlLEZ2HkcaMOvSDwlLvqL281us7HiQGRLaEWuOV9ZpzSd0cPDjTVgUhbWUmxTvUyU1J7nQW56zVw6XFusBuHENnQlSNRbrKDW46ObfjbjdE/H7oLnOcsDa9um01qSPmKMpDDl/SXBwdC/vSi+8/PlFr8zY85I9IKczMzMNtRpJMrjFryFgH5X23kPGMTkHr85FRc579ekq8de//ADIsurRkuAoLvew8xsLnL+kFeIuzCmlNlLJ7wAlLlQPv2mnhgGR0JuKoyuhFwV+4mbhcGMOzFFLORlD1GJsD0EkmZ5Rl2K1DHe8up0I3FrHSU8TRs+f+G3oJoUsKQS7HU+khxKaE9NJPG/2IZI/qZ1o0Ue01My0PaFGCxwI6ChrRCFaNCgaGijxWhQhRRWihQE9RIGWWcZQZGZWFmUlSJXnDpryfQYzjNWhhGihRADHIjxQAELFfX1vFFsw7m0uxSqRh52JSxstcLqZai30DeS/rtOmruWy3tbRT1DqLG/8A5znIsJ0mEqCrTL5hmUAOL2YkaXm7Ir2eWxy66N3DDSaSJYTKwr3UfCalNryk2R8DvtpKeLQAd+ZmiBpMbibszZVtYb9bwHRWp2zSrxUAgfGaeCwx5yjxTDEA/SIkUcMvTtLTpf1lLBuwYBhYHaaVVbc4yEkZ+ITSYmL0Bm3iX7zn8a+tvpLMauRnzOolZYSrETJqQ3myjGhBIzLJqaXkj0ukAoqNAIkzJI3EABhoIyCSJTgA+nSKTZO0eAHbePeC3X36DVfxAc16/Cefz3LEoHUqwuGBBB10M8f49w44esyW8p8yH+E8pzeRiafZHoviuZ2XSX+GbFFBmM7oUUGEsAEBAbl2IkhOsjqjQ9tZOD/ZFWeN45L+E1RYsNUKsLEgHeS/ug9hIbTrVcTxE9TZ2WBfTSbFM6bzn+E1QVGvKxmrRflfWZWqZuhJNF/PcShiSVJK2JPWVMfjWUFVFyefSUMzkDNUA7bxErNaljGVgTtzA6yHH43MdAbd5WpsRs4PY6SHE1HYakA9Af1gTCLhrHKRYyTEP5ZlHEOm+o6jaP8A23MNRvArkwKr9Zi1muxPeaOKfvM4LLsUfZkzSsZBLNJICJJ6QmmygmRbRyISmIiCEmVqgkBlkqTIWS0AsjCyxRkQGuktUhGFiv2ik2WKAHsTzmfF3CPf0iyi70/MvUgalflOkJgBdZGce0aLsGR45qSPD2HY/GBOn8bcINGr7xRZKpvbkH5/OcyJx8kHGTTPY8bOssFJDQljXj095WaAisjqbSZlkVTaNPYpq4ssUtUHpGIjYQ3QepEMzr45XE8Pyo1lkT4LFlD1B3nQ0MUCAQeU5DFYhUGupOw5knQTRRXpFVO5VSQepF/1kMkfYYptaOk0O4BvpMvFcPAJIB1JuBtLmGxOmo5Syr3lBtiY64UZdHItyvpIXodXb4Taq0gSbgdrdJTrUVUgW3+kCy0Y39jN92t0udZK6gCw5bekt1XA0mPj8Ub5QCSAWYgfhRd7xxVspm6VjVXuesFKcemgNjuCLgg33k6IeU1xVIwSbbEqxZe8IKY+WTI2GDCAgCGD2gRsF17yB0luwkbrGBCqQ6YjgXkyJAaBikvu4oAeuHeIiIx7QJGJ4hwYrUzSI/ENOzDY3nk1WiyMyMLMpIInsuLPmnD+O+F5SuIQaN5HA5Nyb9Jk5OPsux2Pi+S4S6yemckkIbwKZkizm/w9Naq2G+0gqDSPVrqo87qPUzJxXHaa6LdvoPnJwxSl4RnzcvFBbka+BOhHfSQcU4olHQ+Zzsg3HdugnNVPEFWxCEID01PzmWzljckkncnczpwj1jR5HlTjPI5ROg4TWNbFUA7Xz1kQ9Mt9p6n4l4UzDOg86EnL1AO08Qw+Jam6Ov4qbrUX+ZSCPtPpfDFcTRp10HlrItRR0zLcj7yzraooTrZwWArK672PQ9ZbLlbC2nK0scZ8MurmrQO+r0jpfuveZ1DFG+R1KsNCr6EGZZxcWa4ZLQdbFFeRlQ4tr3sZovbnY6c5SIzMFUXJ0CqNSZDz4LeyWypWY72nQ8G8OFMPiMRVHmek4RTuqZdCb8zNTgnhjzB6yjy2ITex6mbXiiqKeCxLckov25S/Hja2zLlyp6R8+eH+NZAKdQnJ+6/5ex7TsKThgCrAg81sQZ5km3wh06jLqrMp6qSsuM9npoMRXScNhfEtdLBiHA5No3+oTfwviqi4s90PQ6r8x+saYUbAgEx6GIRxdHRv5SI7KSdpIYJYxBoLAxlBioTRYQfWToJXQyZGtGIktFBzjoYowPXANY77RLvK3FMfSoIXrVERBu7mwv0HUyKYFTFN5hKvGqdNqLJWdEpstmd2VEHe56Gxnnfij2oDMVwSA209/UH+xP1M854nxaviGzV6rudxnJKj+Vdh8JGW1RZCTi7R0mN41Rpsyq3vMvlDpcI1uYJ3mJi+P1G0Wyjov9ZkRrSlYop+DXPn5ZKrDq12Y3JJ9dZHFFeWLRklNy22MBDEaOsZBj5Z7v7G+Le9wJosSWwrsovv7t/MPkSZ4XO59kfFfc4zIx8ldchH8Q2P2kkCPdnog9Jl8W4PQqKTVyrlBb3pspS3PMeXW82sv/neeTe0fxH72r/ZE/ul/G6mweqNClxuq/eKVNbJ44OUkkR4jHYcPkWvSdS1lqI4936sx/B+vKd74YwOGVM9J6dVj+KpTZXA7DoJ4WxIOXLc6D8t16Hr2m1wLFVMPiab4ff/ABVOiunMMBztKoxSZty4XGHk94UdJy3tOxIp8MxFzbOBTA7s1p0uBxS1UWohuri46g8wfQzzr234rLhKVMf4tbMf5VUn72l7OfWzxJWjl4yQyJBiIjrB2hkWgwGgkcg3BIPUXH2mrgeP1qdrvnH5X1+u4mUFiIjQWdvg/ElGpo96bH82qX/m5fGbVIA2I1B2I1B9J5deXMHxGrR1RyBuUPmQ+okrBM9ICQwJz3C/ES1GVHUq7aZhqhabbP3jGTXikGYRQ2Kz2VRPI/bhxIl6GHU6IpruL28x0XT0BM9dQXPrPnHx9xH3+OxD3uA/ul5+VNLfeR9AtI5gD/iOEMfLbWS5NLyINkJEEycrImgIAiMVj2j2gOwQI9o9oiIBY6mXuCYn3dem97ZWlGnCIsb9Df5aySEfSmK4o7YZFpH9riFyo2+VbWepbty7mYXFvBaPhzl0emjMjbDOBm83W5G81fBig4dHYhiyqQei20A7CL2h8RFDBtl/HWPuUtv5tz8Bcwfgtxt91R4u7A1EYnymxudg3MT0HgPhlzSFd1ANYB7D8QU7BvhOFYhnUcstz+W42uJ694AxYq4FATc0y9Jr7+U3W/wMhBfsb+U30LHhym1FmT9x7ELyD7X7XnDe26qWaivKmpY9LudPoDPTThxfTtPIfbGz+/Qk+VtFX+VbZj31Mtlo5aZ5wAIlmlwbhD4nPkK3TIMraXLsVFjytC4nwDEUBmq0mVQxXMpDLcb7SpyV0Pq6syCI4WORaONZKxBC0BhCyxCAgLRDrCaNVOnrAaJcK9mVujA/K2v3nowOYBuoBnmqrpPQuFVc9FG/h+o0kkwLXwig5jHjsej1zjOMFHD1qptanTd787gaT5ddy12bUsSxP8TXJ+pnvftZxvu+HOoNjWdKQ6kE3b6AzwS8gwkMI9Ntx01jgQAdfpASCYwCJIxtI2iEAyxAxMI1jChhCPGDRzGIQtE0SiJhALPdfZZjBUwSA/ipk0z18p/p95l+1HEZq9KlmJFNC5UbBmIsfkLfOUPYvj/NWoE81rD4+U2+QheOTmxrn8uVPiF2/WOT0beJFSnZyaG1ax2tY318s732d8QWnWeixAGI86A/5g2Hrlnn1Q/tQfzafCbOBxOSslW4/ZsLE+tmP6SuL2dDLDtBo9vaeL+2ip/1NJOiM3zIt9p7OHBXMNiMw+IvPAvapi8/EXF/7tET0Nsx/wBwl0vBw+tSaJfACHLVsBfMhudmKWyj0BYsRztroJp+OHIwq7gs/u3W1vPqxII32+0xvAPEQlUUGy2qMzByLlG92yk9hlvr2lrx9xFXCU8+Z0szgWsDY6kDQMQZicX+WzUpL8dHDiODeORHtNJkG1gAm8lEC0BiKyNxrLAtIQLm/WMB0M7bwq98OR+R2Hz1E4u06jwg+lQdCrW+H/EaBHRZe0ULN3ikgNL234ryYWnf8TVKn+kZf+6eRz0b21VwcXRS/wDd0M1u7vf9J5xK2OTEIFQySR1BGmhEo1F4NoFI6Q4pKxMZljZYRikQIyscRPGEmDDBjExhCh4A6T2eY33WOpa2FQNTPqwuPqJ0nimsGxNT+fUjnPOsPXZHV10NNlcfAgzsOJcQWq7Ov74FSw2BYAyMvBu4ckpGTXJz32sdP6zQQggDtt23+pmZVYk3+Px5j0ljD1MvfmOpMrR0U7tHtvhTiHvsPT11ChG/mXT9DPAPE+KNTGYlyb5q1Sx38oYqv0UT07wHxHJTrljpSpvW6C6ox/SeO3J1O5uSTzJ1Mv7Wjj5oqM2a/AMKKj6uy5BnDLbL5dcpvsToPjzl3xXw0IwrqzEV3ckNZsrj8VnH4hfbSYmDxLU3Dr+6b25HS2o57y1xTir4jLnIsgsFQZEvpcheugkK2V9lVFINEYKiIQZAeCwhxjBACzWHci0ZFkdQ6yZToJKiTGG83/CNS1R1/Ml/kf8AmYM2PCzft7cyht8xBCR2ukUr2PSKTJGd7V62fiVQf5aUqfxCXP8AunGXnRePa2fiOLYa2rFL/wAgCf8AbOeJkGiLGjOftHgVG0gooEDRaSysm8nBgElsKMBHiEfUQzQCYbGAIDQ42ijK0IwAEjWaPD6huVvzvr0tM55Lh6liO+khJF2CXWSNVz22tp0Xv3MKnv69evIDtIs9/obn7mJ3t+kikdXsqsv0eMmkmKQf4tE0v9Zyn6EzmUEOs5J33gA6SZys7uTDAiaMt4i0KKAogI5g37x9QHvAaJjeCIVQ0RneT0heVydZNSMBsltL/AKmXEp/FdPmJQWS0Gy1Eb8roT/qEdAj0XWKTaRRjOD8U/8ArcX/AO5r/wD2GZUUUTIsRkbxRRDRCm4k6RRRoJBxRRRkQRBMUUQ0Md47RRQAR2hU9xFFIsnj+yNIbj4SLEc/SKKROp/wZ7bx+sUUkczL9mGu0jbePFGioJ9/lBEUUkAhvE8UUixogMnoRRQG/BPGbceq/cRRSQI9GiiigM//2Q=="
          class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
        />

        <blockquote
          class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl"
        >
          <p class="text-lg font-bold  text-white">mamang garox</p>
          <p class="mt-1 text-xs font-medium  text-white">
            wakil persiden wakanda
          </p>
          <p class="mt-4 text-sm  text-white">
          hei teman terimakasih untuk kalian semua, aku masih ada di sini bro hei ini aku sedang merekam nya,
          hey semua aku masih stay di sini ada adma,ada riski,aku sangt berterimakasih karna kalian baik
          </p>

          <div class="mt-8 flex justify-center gap-0.5  text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
        </blockquote>
      </div>

      <div>
        <img
          alt="Woman"
          src="https://i.ytimg.com/vi/Y1duzLxyyJ4/mqdefault.jpg"
          class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
        />

        <blockquote
          class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl"
        >
          <p class="text-lg font-bold  text-white">reza kecap</p>
          <p class="mt-1 text-xs font-medium text-white">
           atlit tinju afrika
          </p>
          <p class="mt-4 text-sm text-white">
hey ouens dankie aan julle almal ek is nog hier broer hey ek neem dit tans op,
          hallo almal, ek bly steeds hier, daar is adma, daar is risiko, ek is baie dankbaar want julle is goed
          </p>

          <div class="mt-8 flex justify-center gap-0.5 text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
        </blockquote>
      </div>

      <div>
        <img
          alt="Woman"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrhUSt2S2lsJjdaaWV7zgaoVdl0dmK5MYhzQ&usqp=CAU"
          class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
        />

        <blockquote
          class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl"
        >
          <p class="text-lg font-bold text-white">Tian yiming</p>
          <p class="mt-1 text-xs font-medium text-white">
          Super idol Chines
          </p>
          <p class="mt-4 text-sm text-white">
          嘿伙计们谢谢大家我还在这里兄弟嘿我正在录制它，
          大家好 我还留在这里 有a有风险 我很感激 因为你很好
          </p>

          <div class="mt-8 flex justify-center gap-0.5 text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
        </blockquote>
      </div>

      <div>
        <img
          alt="Woman"
          src="https://i.pinimg.com/564x/e3/07/e6/e307e66bfd0aac82406b0835328e34c5.jpg"
          class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
        />

        <blockquote
          class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl"
        >
          <p class="text-lg font-bold text-white">mr.Gatot</p>
          <p class="mt-1 text-xs font-medium text-white">
          customer starbucks
          </p>
          <p class="mt-4 text-sm text-white">
          Hey guys thanks everyone I'm still here bro hey I'm recording it,
          Hi everyone I'm still here with adma and risk and I'm grateful because you're fine
          </p>

          <div class="mt-8 flex justify-center gap-0.5 text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
        </blockquote>
      </div>

      <div>
        <img
          alt="Woman"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgCM3W-_jcGZnkAtnqj18Uj7RWjoL00A6zNg&usqp=CAU"
          class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
        />

        <blockquote
          class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl"
        >
          <p class="text-lg font-bold text-white">mang oleh</p>
          <p class="mt-1 text-xs font-medium text-white">
           Penjual odading malaysia
          </p>
          <p class="mt-4 text-sm text-white">
            sangat bagus dan juge cantek betul betul betul
          </p>

          <div class="mt-8 flex justify-center gap-0.5 text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
        </blockquote>
      </div>

      <div>
        <img
          alt="Woman"
          src="https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
        />

        <blockquote
          class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl"
        >
          <p class="text-lg font-bold text-gray-700">Sophie Lennon</p>
          <p class="mt-1 text-xs font-medium text-gray-500">
            Digital Marketing at Studio
          </p>
          <p class="mt-4 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem alias ut provident sapiente repellendus.
          </p>

          <div class="mt-8 flex justify-center gap-0.5 text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
        </blockquote>
      </div>
    </div>
  </div>
</section>

 </div>

  )
}

export default Media