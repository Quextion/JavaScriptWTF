#include <sys/types.h>
#include <unistd.h> 
#include <stdio.h>
#include <pthread.h> //包含创建线程所需的函数
#include <sys/wait.h> 

int value = 100; //data

//该函数的格式被要求
void* threadFunc1(void* arg){
	for (int i = 0; i < 3; ++i)
	{	
		sleep(1);
		printf("Thread1-->%d\n",++value);
	}
}

void* threadFunc2(void* arg){
	for (int i = 0; i < 3; ++i)
	{	
		sleep(1);
		printf("Thread2-->%d\n",++value);
	}
}


int main(){
	pthread_t tid1,tid2;

	pthread_create(&tid1,NULL,threadFunc1,NULL);
	//四个参数，
	//1. Thread id address
	//2. 线程的属性
	//3. 线程执行什么任务
	//4. 线程执行函数的参数

	pthread_create(&tid2,NULL,threadFunc2,NULL);
	
	for (int i = 0; i < 3; ++i)
	{	
		sleep(1); // 注释这条语句展示
		printf("Main-->%d\n",++value);
	}
	// pthread_join(tid1,NULL); //调用该函数的线程必须等待指定线程结束才会往下走 
	// pthread_join(tid2,NULL);
	return 0;
}