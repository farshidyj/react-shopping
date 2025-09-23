// ProductSkeleton.jsx
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../components/SkeletonCard.module.css"

export default function ProductSkeleton() {
  return (
    <div className={styles.container}>
    { Array(8).fill().map((_, i) =>  <div key={i} className={styles.card}>
     
      <Skeleton className={styles.img}/>      {/* جای تصویر */}
      <Skeleton   className={styles.h3}/>
      <Skeleton  className={styles.p}/> 
      
    </div> )}
    </div>
   
  );
}