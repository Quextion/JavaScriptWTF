#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>

int main(){
	pid_t pid;  
	pid_t cid; //<sys/types.h> -> pid_t process Id type 表述进程编号的数据类型

	// printf("Before fork Process id: %d\n",getpid()); //通过getpid()函数获得当前进程的Process Id


	fork();//返回值，在子进程中是0， 父进程是子进程的id号
	//该函数会创建一个新的进程，该进程是当前进程的子进程
	// cid = fork();

	printf("this is process %d",getpid());

	// if(cid == 0){
	// 	printf("我是子进程，我的父进程是%d\n",getppid());

	// }else{
	// 	printf("我是父进程\n");
	// }

	// pause();
	return 0;
} 